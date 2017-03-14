using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetVideosCore.Dtos;
using AutoMapper;


using DotNetVideosCore.Interfaces.Repositories;
using DotNetVideosCore.Models;

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
            List<Video> videosList = //this._repository.SelectAll();
                new List<Video>()
                {
                    new Video()
                    {
                        Category = VideoCategoryEnum.Training,
                        Code = "Text Video1",
                        LocalUrl = "http://abc.pl",
                        Url = "http://def.pl",
                        Rating = 2,
                        UploadedDate = DateTime.UtcNow,
                        CreatedDate = DateTime.UtcNow.Subtract(TimeSpan.FromMinutes(40)),
                        Title = "Text Video1 Title",
                        MediaType = "abc",
                        VideoLength = 2344,
                        VideoOriginEnum = VideoOriginEnum.YouTube,
                        WatchedCount = 0,
                        Name = "Text Video 1",
                        Tags = new List<string> () {"abc", "def", "ghi"}
                    }
                };
            var result = videosList.Select(v => _mapper.Map<VideoDto>(v));
            return Ok( result );
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVideo(string id)
        {
            Video result;
            var video = await _repository.Get(id.ToString());

            if (video == null)
            {
                //returns HTTP 404
                return NotFound();
            }

            result = _mapper.Map<Video>(video);

            //returns HTTP 200
            return Ok(result);
        }

        

        [HttpPost("{video}")]
        public async Task<IActionResult> PostVideo([FromBody] VideoDto video)
        {
            if (video == null)
            {
                return BadRequest("Object cannot be null");
            }
            Models.Video videoModel = _mapper.Map<DotNetVideosCore.Models.Video>(video);
            return Ok(await this._repository.InsertVideo(videoModel));
        }
        
    }
}
