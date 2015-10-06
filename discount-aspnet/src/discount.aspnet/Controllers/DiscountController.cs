using System;
using System.Threading.Tasks;
using Newtonsoft.Json;

using Microsoft.AspNet.Mvc;

namespace discount.aspnet.Controllers
{
    [Route("[controller]")]
    public class DiscountController : Controller
    {
        // GET discount/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            return JsonConvert.SerializeObject(new {percentage =( (uint)id.GetHashCode()) % 100});       
        }
    }
}
