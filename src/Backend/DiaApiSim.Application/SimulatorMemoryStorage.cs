using DiaApiSim.Interfaces.Application;
using System;
using System.Collections.Generic;

namespace DiaApiSim.Application
{
    public class SimulatorMemoryStorage : ISimulatorMemoryStorage
    {
        private readonly Dictionary<Guid, List<string>> _collectionRequests = new Dictionary<Guid, List<string>>();//string-->List[<string>] OK

        public void AddApiPostRequest(Guid requestUid, string requestContent)
            //if(requestUid=exist) then {requestContent.add}{Add(requestUid, requestContent)}
        {
            if(!_collectionRequests.ContainsKey(requestUid))
            {
                var newList = new List<string>();
                newList.Add(requestContent);

                //add items in collection requests
                _collectionRequests.Add(requestUid, newList);
            }
            else
            {
                _collectionRequests.TryGetValue(requestUid, out List<string> value);
                    value.Add(requestContent);
                _collectionRequests.Remove(requestUid);
                _collectionRequests.Add(requestUid, value);
            }
        }

        public List<string> GetApiReguest(Guid requestUid)//return List[<string>]
        {
            //_collectionRequests.TryGetValue(requestUid, out string value);
            return _collectionRequests.ContainsKey(requestUid) ? _collectionRequests[requestUid] : null;
        }
        
    }
}
