using System.Collections.Generic;
using DotNetVideosCore.Models;

namespace DotNetVideosCore.Interfaces.Repositories
{
    public interface IVideosRepository
    {
        Video InsertVideo(Video video);
        List<Video> SelectAll();

        List<Video> Filter(string query);

        Video Get(string id);

        Video UpdateVideo(string id, Video video);

    }
}