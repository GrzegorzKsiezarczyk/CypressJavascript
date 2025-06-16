import { ShopPage } from '../pages/ShopPage';
import { ProductPage } from '../pages/ProductPage';

describe('Shopping path - go to checkout', () => {
  const shop = new ShopPage();
  const product = new ProductPage();

  it('adds product to cart and navigates to checkout', () => {
    shop.visit();
    shop.selectInStockFilter();
    shop.goToSecondPage();
    shop.addLastProductToCart();
    product.assertSuccessMessage();

    shop.goToCart();
    shop.proceedToCheckout();
    shop.assertOnCheckoutPage();
  });
});
