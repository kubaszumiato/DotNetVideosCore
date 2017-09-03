using DotNetVideosCore.Interfaces.OEmbed;

namespace DotNetVideosCore.Models
{
    public class OEmbedYouTubeProvider : IOEmbedProvider
    {
        public string BaseUrl { get; } = "http://www.youtube.com/oembed?url=";
        public string UrlRegexPattern { get; } = @"http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\\_]*)(&(amp;)?‌​[\w\?‌​=]*)?";// 
         //= "/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig";
        public string ProviderName { get; } = "YouTube";
    }
}