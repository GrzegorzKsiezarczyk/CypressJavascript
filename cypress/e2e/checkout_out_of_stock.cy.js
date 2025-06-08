import { ShopPage } from '../pages/ShopPage';

describe('Shopping path - go to checkout', () => {
  const shop = new ShopPage();

  it('adds product out of stock to cart and try navigates to checkout', () => {
    shop.visit();
    shop.selectOutOfStockFilter();
    shop.addFirstProductToCart();
    shop.goToCart();
    shop.proceedToCheckout();
    shop.assertOnCheckoutPage();
  });
});
