using DotNetVideosCore.Models;
using DotNetVideosCore.Interfaces.Repositories;
using System.Collections.Generic;
using System;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;

namespace DotNetVideosCore.Repositories
{

    public class VideosRepository : IVideosRepository
    {

        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
        private IMongoCollection<Video> _collection;

        public VideosRepository()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _database = _client.GetDatabase("dotnetvideoscore");
            _collection = _database.GetCollection<Video>("videos");
        }


        public List<Video> Filter(string query)
        {
            throw new NotImplementedException();
        }

        public Video Get(string id)
        {
            throw new NotImplementedException();
        }

        public Video InsertVideo(Video video)
        {
            throw new NotImplementedException();
        }

        public List<Video> SelectAll()
        {
            var query = this._collection.Find(new BsonDocument()).ToListAsync();
            return query.Result;
        }

        public Video UpdateVideo(string id, Video video)
        {
            throw new NotImplementedException();
        }
    }
}