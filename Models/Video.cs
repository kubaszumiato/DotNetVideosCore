using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DotNetVideosCore.Models
{
    public class Video 
    {
        
        public ObjectId Id {get;set;}
        public DateTime CreatedDate { get; set; }
        public string Category {get; set; }
        public string Name {get; set; }

    }
}