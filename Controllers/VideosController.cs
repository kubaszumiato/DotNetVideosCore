using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetVideosCore.Dtos;
using AutoMapper;


using DotNetVideosCore.Interfaces.Repositories;

namespace DotNetVideosCore.Controllers
{
    [Route("api/[controller]")]
    public class VideosController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IVideosRepository _repository;

        public VideosController(IMapper mapper, IVideosRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        private static string[] Categories = new[]
                {
            "Tutorial", "VLog", "Conference"
        };

        [HttpGet("[action]")]
        public IEnumerable<VideoDto> VideosSample()
        {
            List<DotNetVideosCore.Models.Video> videosList = this._repository.SelectAll();
            return videosList.Select(v => _mapper.Map<VideoDto>(v));
        }
    }
}
