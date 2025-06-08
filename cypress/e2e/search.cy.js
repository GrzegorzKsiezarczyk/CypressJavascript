import { ShopPage } from '../pages/ShopPage';

describe('Test search  product', () => {
  const shop = new ShopPage();

  it('search with correct product name', () => {
    cy.visit('/');
    shop.Search('Macbook')
  });

  it('search with incorrect product name', () => {
    cy.visit('/');
    shop.Search('nonexistentitem123')
    cy.contains('There is no product that matches the search criteria.').should('exist');
  });
});
