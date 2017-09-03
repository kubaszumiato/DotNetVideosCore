using System;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
using DotNetVideosCore.Interfaces.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetVideosCore.Controllers
{
    [Route("api/oembed")]
    public class OEmbedController : Controller
    {
        private IOEmbedRepository _oEmbedRepository;
        public OEmbedController(IOEmbedRepository oEmbedRepository)
        {
            this._oEmbedRepository = oEmbedRepository;
        }

        [HttpGet("{providerName}/{url}")]
        public async Task<IActionResult> GetOEmbedByUrlForProvider(string providerName, string url)
        {
            var oEmbed = await _oEmbedRepository.GetOEmbedJsonByUrlAndProvider(url, providerName);

            if (!string.IsNullOrEmpty(oEmbed))
            {
                return Ok(oEmbed);
            }

            return NotFound();   
        }
        [HttpGet("{url}")]
        public async Task<IActionResult> GetOEmbedByUrl(string url)
        {
            var oEmbed = await _oEmbedRepository.GetOEmbedJsonByUrl(url);

            if (!string.IsNullOrEmpty(oEmbed))
            {
                return Ok(oEmbed);
            }

            return NotFound();
        }
    }
}
