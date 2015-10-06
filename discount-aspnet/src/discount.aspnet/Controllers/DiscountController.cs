using System;
using System.Threading.Tasks;
using Newtonsoft.Json;

using Microsoft.AspNet.Mvc;

namespace discount.aspnet.Controllers
{
    [Route("")]
    public class DiscountController : Controller
    {
        // GET 5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            return JsonConvert.SerializeObject(new {percentage =( (uint)id.ToLower().GetHashCode()) % 100});       
        }
    }
}
