using AutoMapper;
using DotNetVideosCore.Dtos;
using DotNetVideosCore.Models;
using MongoDB.Bson;

namespace DotNetVideosCore
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Video, VideoDto>();
               // .IgnoreAllPropertiesWithAnInaccessibleSetter()
               // .IgnoreAllSourcePropertiesWithAnInaccessibleSetter();

            CreateMap<VideoDto, Video>();
            // CreateMap<ObjectId, string>().ConvertUsing(o => o.ToString());
            // CreateMap<string, ObjectId>().ConvertUsing(s => ObjectId.Parse(s));
        }
    }

}
