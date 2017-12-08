using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetVideosCore.Models;

namespace DotNetVideosCore.Interfaces.Repositories
{
    public interface IUsersRepository
    {
        Task<IEnumerable<User>> SelectAll();
        Task<IEnumerable<User>> Filter(string query);

        Task<User> Get(string id);
        
        Task<bool> CheckIfExists(string id);


        Task<User> InsertUser(User user);
        Task<User> UpdateUser(string id, User user);
        Task DeleteUser(string id);
    }
}