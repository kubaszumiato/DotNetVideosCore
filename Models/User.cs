using System;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using MongoDB.Bson;


namespace DotNetVideosCore.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}