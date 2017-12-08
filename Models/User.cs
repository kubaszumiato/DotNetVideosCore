using System;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using MongoDB.Bson;


namespace DotNetVideosCore.Models
{
    public class User
    {
        [BsonId]
        public string Id { get; set; }
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool Verified { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}