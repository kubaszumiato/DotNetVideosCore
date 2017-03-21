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

        [HttpGet()]
        public async Task<IActionResult> Videos()
        {
            var result = await _repository.SelectAll();
            return Ok(result);
        }
        [HttpGet("empty")]
        public ActionResult Empty()
        {
            return Ok(new VideoDto());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVideo(string id)
        {
            var video = await _repository.Get(id.ToString());

            if (video == null)
            {
                return NotFound();
            }
            
            return Ok(_mapper.Map<Video>(video));
        }
        

        [HttpPost("{video}")]
        public async Task<IActionResult> PostVideo([FromBody] VideoDto video)
        {
            if (video == null)
            {
                return BadRequest("Could not deserialize the Video object");
            }
            Video videoModel = _mapper.Map<Video>(video);
            VideoDto result = _mapper.Map<VideoDto>(await _repository.InsertVideo(videoModel));
            return CreatedAtAction("PostVideo", result);
        }

        [HttpPut("{video}")]
        public async Task<IActionResult> EditVideo([FromBody] VideoDto video)
        {
            if (video == null)
            {
                return BadRequest("Could not deserialize the Video object");
            }

            return Ok(await _repository.UpdateVideo(video.Id, _mapper.Map<Video>(video)));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveVideo(string id)
        {
            if (!await _repository.CheckIfExists(id))
            {
                return NotFound(id);
            }
            await _repository.DeleteVideo(id);
            return NoContent();
        }
        
    }
}
