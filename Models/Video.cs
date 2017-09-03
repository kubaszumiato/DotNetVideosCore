using System;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using MongoDB.Bson;

namespace DotNetVideosCore.Models
{
    public class Video
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string ThumbUrl { get; set; }
        public string OriginalTitle { get; set; }
        public string OriginalDescription { get; set; }
        //public string MediaType { get; set; }
        public int VideoLength { get; set; }
        public VideoOriginEnum VideoOrigin { get; set; }
        //public List<string> Tags { get; set; }
        public int Rating { get; set; }
        public int WatchedCount { get; set; }
        public int LikesCount { get; set; }
        public DateTime UploadedDate { get; set; }
        //public VideoCategoryEnum Category { get; set; }
        public User Owner { get; set; }

        public string OriginalAuthor { get; set; }
        public string OriginalAuthorUrl { get; set; }
    }
}