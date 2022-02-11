using DiaApiSim.Interfaces.Application;
using DiaApiSim.Models;
using System;
using System.Linq;
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

        public List<RequestListModel> GetAllApiRequest()
        {
            var returnList = _collectionRequests.Select(x => new RequestListModel
            {
                Key = x.Key,
                Value = x.Value
            })
            .ToList();

            return returnList;
        }

    }

}

