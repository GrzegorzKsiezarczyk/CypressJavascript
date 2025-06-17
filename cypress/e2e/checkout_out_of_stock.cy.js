import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";

describe("Shopping path - go to checkout", () => {
  const shop = new ShopPage();
  const product = new ProductPage();

  it("adds product out of stock to cart and try navigates to checkout", () => {
    shop.visit();
    shop.selectOutOfStockFilter();
    shop.addFirstProductToCart();
    product.assertSuccessMessage();
    shop.goToCart();
    shop.proceedToCheckout();
    shop.assertOnCheckoutPage();
  });
});
