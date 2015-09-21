using System;
using Xunit;
using discount.aspnet.Controllers;

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
		public void DiscountsShouldBeBetween0And100()
		{
			var discountctrl = new DiscountController();
			var discount1 = discountctrl.Get("Test");
			Assert.InRange(discount1, 0, 100);
		}
	}
}