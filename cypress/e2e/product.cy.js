import { ProductPage } from '../pages/ProductPage';
import { ShopPage } from '../pages/ShopPage';


describe('Product Page - Apple Cinema 30"', () => {
  const product = new ProductPage();
  const shop = new ShopPage();

  beforeEach(() => {
    product.visit();
    cy.viewport(1280, 720)

  });

  it('Configurable product stock and price', () => {
    product.assertStockAndPriceVisible();
  });
 
  it('Add to cart button', () => {
    product.selectSize();
    product.clickAddToCart();
    product.assertSuccessMessage();
  });

  it('Compare product button', () => {
    product.clickCompare();
    shop.checkCompareMessage();

  });

  it('Buy now button', () => {
    product.selectSize();
    product.clickBuyNow();
    product.assertOnCheckoutPage();
  });

  it('Ask a question form', () => {
    product.openAskQuestionForm();
    product.fillAskQuestionForm('Test User', 'test@example.com','Question', 'Is this product 4K?');
    product.assertQuestionFormResponse();
  });

  it('Ratings', () => {
    product.checkRatingsVisible();
  });

  it('Open size chart', () => {
    product.openSizeChart();
  });

  it('Description, Reviews, Custom', () => {
    product.openTab('Reviews');
    product.openTab('Description');
    product.openTab('Custom');
  });

  it('Product pictures', () => {
    product.clickFirstThumbnail();
    product.assertImagePopupVisible();
  });
});
