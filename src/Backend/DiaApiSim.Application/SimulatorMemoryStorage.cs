using DiaApiSim.Interfaces.Application;
using System;
using System.Collections.Generic;

namespace DiaApiSim.Application
{
    public class SimulatorMemoryStorage : ISimulatorMemoryStorage
    {
        private readonly Dictionary<Guid, List<string>> _collectionRequests = new Dictionary<Guid, List<string>>();

        public void AddApiPostRequest(Guid requestUid, string requestContent)
        {
            if(_collectionRequests.TryGetValue(requestUid, out List<string> listContent))
            {
                listContent.Add(requestContent);
            }
            else
            {
                _collectionRequests.Add(requestUid, new List<string>() { requestContent });
            }
        }

        public List<string> GetApiByUidRequest(Guid requestUid)
        {
            return _collectionRequests.ContainsKey(requestUid) ? _collectionRequests[requestUid] : null;
        }

        public Dictionary<Guid, List<string>> GetAllApiRequest()
        {
            return _collectionRequests;
        }

    }
}
