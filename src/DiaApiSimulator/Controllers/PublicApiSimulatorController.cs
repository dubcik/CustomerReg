using Microsoft.AspNetCore.Mvc;
using System;

namespace DiaApiSimulator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicApiSimulatorController : ControllerBase
    {
        [HttpPost("{requestUid}/PostRequest")]
        public ActionResult AddPostRequest([FromRoute]Guid requestUid)
        {
            return Ok(requestUid);
        }
    }
}
