using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetVideosCore.Models;

namespace DotNetVideosCore.Interfaces.Repositories
{
    public interface IVideosRepository
    {
         Task<Video> InsertVideo(Video video);
        List<Video> SelectAll();

        List<Video> Filter(string query);

        Task<Video> Get(string id);

        Task<Video> UpdateVideo(string id, Video video);

    }
}