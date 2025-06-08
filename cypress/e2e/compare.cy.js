import { ShopPage } from '../pages/ShopPage';

describe('Add product to compare', () => {
  const shop = new ShopPage();

  it('add product to compare and check message', () => {
    cy.visit('/index.php?route=product/category&path=20');
    cy.scrollTo(0, '50%');
    shop.goToProductCartPage();
    shop.addProductToCompare();
    shop.checkCompareMessage();
  });
});
