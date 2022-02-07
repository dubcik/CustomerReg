using System;

namespace DiaApiSim.Interfaces.Application
{
    public interface ISimulatorMemoryStorage
    {
        void AddApiPostRequest(Guid requestUid, string requestContent);
    }

}