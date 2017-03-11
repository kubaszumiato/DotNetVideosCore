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
    [Route("api/videos")]
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
        public IActionResult VideosSample()
        {
            List<DotNetVideosCore.Models.Video> videosList = this._repository.SelectAll();
            var result = videosList.Select(v => _mapper.Map<VideoDto>(v));
            return Ok( result );
        }
        [HttpGet("{id}")]
        public IActionResult GetVideo(int id)
        {
            VideoDto video = null;

            if (video == null)
            {
                //returns HTTP 404
                return NotFound();
            }
            //returns HTTP 200
            return Ok(video);
        }

        [HttpPost("{video}")]
        public async Task<IActionResult> PostVideo(VideoDto video)
        {
            if (video == null)
            {
                video = new VideoDto
                {
                    Title = "lalamido " + DateTime.UtcNow.ToString(),
                    Url = "http://eventuallyNoUrl",
                    Code = "code"
                }; 
            }
            Models.Video videoModel = _mapper.Map<DotNetVideosCore.Models.Video>(video);
            return Ok(await this._repository.InsertVideo(videoModel));
        }
        
    }
}
