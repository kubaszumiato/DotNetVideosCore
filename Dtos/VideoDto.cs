using System;
using System.Collections.Generic;
using DotNetVideosCore.Models;

namespace DotNetVideosCore.Dtos
{
    public class VideoDto
    {
        public string Id { get; set; }
        public string Title { get; set; } 
        public string Url { get; set; }
        //public string LocalUrl { get; set; }
        //public string Code { get; set; }
        //public int VideoLength { get; set; }
        public VideoOriginEnum VideoOrigin { get; set; }
        //public List<string> Tags { get; set; }
        public int Rating { get; set; }
       // public int WatchedCount { get; set; }
        //public DateTime CreatedDate { get; set; }
        public DateTime UploadedDate { get; set; }
       // public VideoCategoryEnum Category { get; set; }
    }
}