using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Collections.Generic;

namespace DotNetVideosCore.Models
{
    public class Video
    {

       [BsonId]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string LocalUrl { get; set; }
        public string Code { get; set; }
        public string MediaType { get; set; }
        public int VideoLength { get; set; }
        public VideoOriginEnum VideoOriginEnum { get; set; }
        public List<string> Tags { get; set; }
        public int Rating { get; set; }
        public int WatchedCount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UploadedDate { get; set; }
        public VideoCategoryEnum Category { get; set; }
        public string Name { get; set; }

    }
}