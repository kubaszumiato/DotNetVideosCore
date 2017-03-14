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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVideo(string id)
        {
            Video result;
            var video = await _repository.Get(id.ToString());

            if (video == null)
            {
                return NotFound();
            }

            result = _mapper.Map<Video>(video);
            
            return Ok(result);
        }
        

        [HttpPost("{video}")]
        public async Task<IActionResult> PostVideo([FromBody] VideoDto video)
        {
            if (video == null)
            {
                return BadRequest("Could not deserialize Video object");
            }
            Video videoModel = _mapper.Map<Video>(video);
            return Ok(await this._repository.InsertVideo(videoModel));
        }
        
    }
}
