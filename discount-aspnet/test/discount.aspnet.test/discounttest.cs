using System;
using Xunit;
using discount.aspnet.Controllers;
using Newtonsoft.Json;

namespace discount.aspnet.test
{
	public class DiscountTest
	{
		[Fact]
		public void ReproduceableDiscountTest()	{
			var discountctrl = new DiscountController();
			var discount1 = discountctrl.Get("Test");
			var discount2 = discountctrl.Get("Test");
			Assert.Equal(discount1, discount2);
		}

		[Fact]
		public void ReproduceableDiscountTest2()	{
			var discountctrl = new DiscountController();
			var discount1 = discountctrl.Get("Test");
			var discount2 = discountctrl.Get("test");
			Assert.Equal(discount1, discount2);
		} 
		
		//  [Fact]
		//  public void DiscountsShouldBeBetween0And100()
		//  {
		//  	var discountctrl = new DiscountController();
		//  	var discount1 = discountctrl.Get("Test");
		//  	var discountResult = new []{};
		//  	JsonConvert.DeserializeAnonymousType(discount1, discountResult);
		//  	Assert.InRange(int.Parse(discountResult["percentage"]), 0, 100);
		//  	discount1 = discountctrl.Get("Testsdfgdghfghs");
		//  	JsonConvert.DeserializeAnonymousType(discount1, discountResult);
		//  	Assert.InRange(int.Parse(discountResult["percentage"]), 0, 100);			
		//  }
	}
}