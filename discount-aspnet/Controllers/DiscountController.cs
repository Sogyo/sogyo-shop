using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace discount.aspnet.Controllers
{
    [Route("[controller]")]
    public class DiscountController : Controller
    {
        // GET discount/5
        [HttpGet("{id}")]
        public int Get(string id)
        {
            return id.GetHashCode() % 100;       
        }
    }
}
