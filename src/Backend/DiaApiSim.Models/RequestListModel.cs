using System;
using System.Collections.Generic;

namespace DiaApiSim.Models
{
    public class RequestListModel
    {
        public Guid Key { get; set; }
        public List<string> Value { get; set; }
    }
}
