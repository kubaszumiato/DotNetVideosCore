using System;
using System.Collections.Generic;
using DotNetVideosCore.Models;

namespace DotNetVideosCore.Dtos
{
    public class VideoDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }

        public string ThumbUrl { get; set; }
        public string OriginalTitle { get; set; }
        public string OriginalDescription { get; set; }
        public string OriginalAuthor { get; set; }
        public string OriginalAuthorUrl { get; set; }
        
        //public string LocalUrl { get; set; }
        public int VideoLength { get; set; }
        public VideoOriginEnum VideoOrigin { get; set; }
        //public List<string> Tags { get; set; }
        public int Rating { get; set; }
        public int WatchedCount { get; set; }
        public int LikesCount { get; set;  }

        //public DateTime CreatedDate { get; set; }
        public DateTime UploadedDate { get; set; }
        // public VideoCategoryEnum Category { get; set; }

        public User Owner { get; set; } 
        
    }
}