using System;

namespace DotNetVideosCore.Models
{
    public class OEmbed
    {
        public ContentTypeEnum ContentType { get; set; }
        public string ContentVersion { get; set; }
        public string ProviderName { get; set; }
        public string ProviderUrl { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string AuthorUrl { get; set; }
        public string Html { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int Duration { get; set; }
        public string Description { get; set; }
        public string ThumbnailUrl { get; set; }
        public int ThumbnailWidth { get; set; }
        public int ThumbnailHeight { get; set; }
        public DateTime UploadDate { get; set; }
        public int ContentId { get; set; }
        public Uri ContentUri { get; set; }
    }
}
