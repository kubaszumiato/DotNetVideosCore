using System;

namespace DotNetVideosCore.Dtos
{
    public class VideoDto
    {
        public DateTime CreatedDate { get; set; }
        public string Category { get; internal set; }
        public string Name { get; internal set; }
    }
}