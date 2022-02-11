using DiaApiSim.Application;
using DiaApiSim.Interfaces.Application;
using DiaApiSim.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DiaApiSimulator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicApiSimulatorController : ControllerBase
    {
        private readonly ISimulatorMemoryStorage _simulatorMemoryStorage;

        public PublicApiSimulatorController(ISimulatorMemoryStorage simulatorMemoryStorage) =>
        _simulatorMemoryStorage = simulatorMemoryStorage;

        [HttpPost("{requestUid}/PostRequest")]
        public ActionResult AddPostRequest([FromRoute]Guid requestUid, [FromBody]string reguestContent)
        {
            _simulatorMemoryStorage.AddApiPostRequest(requestUid, reguestContent);

            return Ok(reguestContent);
        }

        [HttpGet("{requestUid}/GetById")]
        public ActionResult<ISimulatorMemoryStorage> GetRequestByGuid([FromRoute]Guid requestUid)
        {
            var requestResponse = _simulatorMemoryStorage.GetApiByUidRequest(requestUid);
            
            return Ok(requestResponse);
        }

        [HttpGet]
        public List<RequestListModel> GetAllRequest()
        {
            
            var requestAllResponse = _simulatorMemoryStorage.GetAllApiRequest();
            return requestAllResponse;
        }
    }
 }
