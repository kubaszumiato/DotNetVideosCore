using DotNetVideosCore.Models;
using DotNetVideosCore.Interfaces.Repositories;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using System.Threading.Tasks;

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


        public List<Video> Filter(string jsonQuery)
        {
            var queryDoc = new BsonDocument(BsonSerializer.Deserialize<BsonDocument>(jsonQuery));
            return _collection.Find<Video>(queryDoc).ToList();
        }

        public async Task<Video> Get(string id)
        {
             return await this._collection
                .Find(
                 new BsonDocument { { "Id", new ObjectId(id) } })
                .FirstAsync();
        }

        public async Task<Video> InsertVideo(Video video)
        {
            await this._collection.InsertOneAsync(video);
            return await this.Get(video.Id.ToString());
        }

        public List<Video> SelectAll()
        {
            var query = this._collection.Find(new BsonDocument()).ToListAsync();
            return query.Result;
        }

        public async Task<Video> UpdateVideo(string id, Video video)
        {
            video.Id = id;

            var filter = Builders<Video>.Filter.Eq(s => s.Id, video.Id);
            await this._collection.ReplaceOneAsync(filter, video);
            return await this.Get(id);
        }
    }
}