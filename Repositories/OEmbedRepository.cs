using DotNetVideosCore.Models;
using DotNetVideosCore.Interfaces.Repositories;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Text.RegularExpressions;
using System.Linq;

using DotNetVideosCore.Interfaces.OEmbed;

namespace DotNetVideosCore.Repositories
{

    public class OEmbedRepository : IOEmbedRepository
    {

        public OEmbedRepository(IServiceProvider serviceProvider)
        {
            Providers = serviceProvider.GetServices<IOEmbedProvider>();
        }
        IEnumerable<IOEmbedProvider> Providers { get; set; }

        public async Task<string> GetOEmbedJsonByUrl(string url)
            => await GetOEmbedJsonByUrlAndProvider(url, null);

        public async Task<string> GetOEmbedJsonOrNullWhenNotFoundByUrlForProvider(string url, IOEmbedProvider provider)
        {
            if (provider == null)
            {
                throw new ArgumentException("Wrong argument has been supplied. Provider cannot be null.");
            }
            using (HttpClient httpClient = new HttpClient())
            {
                var finalUrl = provider.BaseUrl + url;

                HttpResponseMessage response = await httpClient.GetAsync(finalUrl);
                if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return null;
                }
                return await response.Content.ReadAsStringAsync();
            }

        }
        public async Task<string> GetOEmbedJsonByUrlAndProvider(string url, string providerName)
        {
            IOEmbedProvider provider = null;
            if (String.IsNullOrEmpty(providerName))
            {
                provider = GetOEmbedProviderByUrl(url);
            }
            else
            {
                provider = GetOembedProviderByName(providerName);
            }

            if (provider == null)
            {
                return null;
            }
            else
            {
                return await GetOEmbedJsonOrNullWhenNotFoundByUrlForProvider(url, provider);
            }
        }

        public IOEmbedProvider GetOembedProviderByName(string providerName)
            => Providers.FirstOrDefault(provider => provider.ProviderName?.ToLower() == providerName?.ToLower());


        public IOEmbedProvider GetOEmbedProviderByUrl(string url)
        {
            foreach (IOEmbedProvider provider in Providers)
            {
                Regex reg = new Regex(provider.UrlRegexPattern);
                var decoded = System.Net.WebUtility.UrlDecode(url);
                if (reg.IsMatch(decoded))
                {
                    return provider;
                }
            }
            return null;
        }
    }
}