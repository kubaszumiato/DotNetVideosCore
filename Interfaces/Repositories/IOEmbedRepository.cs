using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetVideosCore.Models;

using DotNetVideosCore.Interfaces.OEmbed;

namespace DotNetVideosCore.Interfaces.Repositories
{
    public interface IOEmbedRepository
    {
        IOEmbedProvider GetOembedProviderByName(string providerName);
        IOEmbedProvider GetOEmbedProviderByUrl(string url);
        Task<string> GetOEmbedJsonByUrl(string url);
        Task<string> GetOEmbedJsonByUrlAndProvider(string url, string providerName);
        Task<string> GetOEmbedJsonOrNullWhenNotFoundByUrlForProvider(string url, IOEmbedProvider provider);
    }
}