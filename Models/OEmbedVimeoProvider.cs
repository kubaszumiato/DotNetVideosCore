using DotNetVideosCore.Interfaces.OEmbed;

namespace DotNetVideosCore.Models
{
    public class OEmbedVimeoProvider : IOEmbedProvider
    {
        public string BaseUrl { get; } = "https://vimeo.com/api/oembed.json?url=";
        public string UrlRegexPattern { get; } = @"vimeo\.com/(?:.*#|.*/)?([0-9]+)";
        public string ProviderName { get; } = "Vimeo";
    }
}