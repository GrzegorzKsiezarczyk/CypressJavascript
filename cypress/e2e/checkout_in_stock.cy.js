
import { ShopPage } from '../pages/ShopPage';

describe('Shopping path - go to checkout', () => {
  const shop = new ShopPage();

  it('adds product to cart and navigates to checkout', () => {
    shop.visit();
    shop.selectInStockFilter();
    shop.goToSecondPage();
    shop.addLastProductToCart();
    shop.goToCart();
    shop.proceedToCheckout();
    shop.assertOnCheckoutPage();
  });
});
