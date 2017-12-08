using DotNetVideosCore.Models;
using DotNetVideosCore.Interfaces.Repositories;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;

namespace DotNetVideosCore.Repositories
{

    public class UsersRepository : IUsersRepository
    {
        private readonly MongoContext _context = null;

        public UsersRepository(IOptions<Settings> settings)
        {
            _context = new MongoContext(settings);
        }

        public async Task<IEnumerable<User>> Filter(string jsonQuery)
        {
            var queryDoc = new BsonDocument(BsonSerializer.Deserialize<BsonDocument>(jsonQuery));
            return await _context.Users.Find(queryDoc).ToListAsync();
        }

        public async Task<IEnumerable<User>> SelectAll()
        {
            return await _context.Users.Find(new BsonDocument()).ToListAsync();
        }

        

        public async Task<User> Get(string id)
        {
            var filter = Builders<User>.Filter.Eq("Id", id);

            try
            {
                return await _context.Users
                                .Find(filter)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }           
        }

        public async Task<bool> CheckIfExists(string id)
        {
            var filter = Builders<User>.Filter.Eq("Id", id);

            try
            {
                return await _context.Users.CountAsync(filter) > 0;
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<User> InsertUser(User user)
        {
            user.CreatedDate = DateTime.Now;
            await _context.Users.InsertOneAsync(user);
            return await this.Get(user.Id.ToString());
        }

        public async Task<User> UpdateUser(string id, User user)
        {
            //User.Id = id;

            var filter = Builders<User>.Filter.Eq(s => s.Id, user.Id);
            await _context.Users.ReplaceOneAsync(filter, user);
            return await this.Get(id);
        }

        public async Task DeleteUser(string id)
        {
            var filter = Builders<User>.Filter.Eq("Id", id);

            try
            {
                await _context.Users.DeleteOneAsync(filter);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }        
    }
}