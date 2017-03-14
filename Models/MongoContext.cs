using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DotNetVideosCore.Models
{
    public class MongoContext
    {
        private readonly IMongoDatabase _database = null;

        public MongoContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
                _database = client.GetDatabase(settings.Value.Database);
        }

        internal IMongoCollection<Video> Videos
        {
            get
            {
                return _database.GetCollection<Video>("videos");
            }
        }

        internal IMongoCollection<User> Users
        {
            get
            {
                return _database.GetCollection<User>("users");
            }
        }
    }
}