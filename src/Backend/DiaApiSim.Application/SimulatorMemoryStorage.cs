using DiaApiSim.Interfaces.Application;
using System;
using System.Collections.Generic;

namespace DiaApiSim.Application
{
    public class SimulatorMemoryStorage : ISimulatorMemoryStorage
    {
        private readonly Dictionary<Guid, string> _collectionRequests = new Dictionary<Guid, string>();

        public void AddApiPostRequest(Guid requestUid, string requestContent)
        {
            //add items in collection requests
            _collectionRequests.Add(requestUid, requestContent);

        }
    }
}
