using System;
using System.Collections.Generic;

namespace DiaApiSim.Interfaces.Application
{
    public interface ISimulatorMemoryStorage
    {
        void AddApiPostRequest(Guid requestUid, string requestContent);

        List<string> GetApiByUidRequest(Guid requestUid);
    }

}