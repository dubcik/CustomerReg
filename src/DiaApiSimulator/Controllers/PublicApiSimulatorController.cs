﻿using DiaApiSim.Application;
using DiaApiSim.Interfaces.Application;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet("{requestUid}")]
        public ActionResult<ISimulatorMemoryStorage> AddGetReguest([FromRoute]Guid requestUid)
        {
            //GetApiReguest
            return Ok(_simulatorMemoryStorage.GetApiReguest(requestUid));//Ok(List[<string>])
        }
    }
 }
