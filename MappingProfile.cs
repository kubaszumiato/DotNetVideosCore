using AutoMapper;
using DotNetVideosCore.Dtos;
using DotNetVideosCore.Models;

namespace DotNetVideosCore
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Video, VideoDto>();
            CreateMap<VideoDto, Video>();
        }
    }

}
