using DotNetVideosCore.Models;
using DotNetVideosCore.Interfaces.Repositories;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using System;

namespace DotNetVideosCore.Repositories
{

    public class VideosRepository : IVideosRepository
    {

        private readonly MongoContext _context = null;

        public VideosRepository(IOptions<Settings> settings)
        {
            _context = new MongoContext(settings);
        }


        public async Task<IEnumerable<Video>> Filter(string jsonQuery)
        {
            var queryDoc = new BsonDocument(BsonSerializer.Deserialize<BsonDocument>(jsonQuery));
            return await _context.Videos.Find(queryDoc).ToListAsync();
        }

        public async Task<Video> Get(string id)
        {
            var filter = Builders<Video>.Filter.Eq("Id", id);

            try
            {
                return await _context.Videos
                                .Find(filter)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }           
        }

        public async Task<Video> InsertVideo(Video video)
        {
            await _context.Videos.InsertOneAsync(video);
            return await this.Get(video.Id.ToString());
        }

        public async Task<IEnumerable<Video>> SelectAll()
        {
            return await _context.Videos.Find(new BsonDocument()).ToListAsync();

        }

        public async Task<Video> UpdateVideo(string id, Video video)
        {
            //video.Id = id;

            var filter = Builders<Video>.Filter.Eq(s => s.Id, video.Id);
            await _context.Videos.ReplaceOneAsync(filter, video);
            return await this.Get(id);
        }
    }
}