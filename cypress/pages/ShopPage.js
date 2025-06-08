
export class ShopPage {
  visit() {
    cy.visit('/index.php?route=product/category&path=17'); // Software category
    cy.viewport(1440, 900);

  }
  randomCategory() {
    cy.visit('/');
  // all links from menu
    cy.get('.nav > li > a').then(links => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const link = links[randomIndex];
    const href = link.getAttribute('href');

    cy.visit(href);    //open random category
    cy.get('.content', { timeout: 8000 }).should('be.visible');  
    cy.get('.content h1, .content h2, .content h1.h4', { timeout: 8000 }).should('exist').should('be.visible');

  }); 
}

  Search(keyword) {
    // first input
    cy.get('input[name="search"]').first().clear().type(keyword);

    // button „Search”
    cy.get('button[type="submit"].type-text').click();
    cy.get('.content').should('contain.text', keyword);

  }
  visitCategory(path = 20) {
    cy.visit(`/index.php?route=product/category&path=${path}`);
  }

  selectSortOption(optionText) {
    cy.get('#input-sort-212403', { timeout: 5000 }).select(optionText);
  }

  verifyProductsLoaded() {
    cy.get('.product-thumb .caption h4', { timeout: 5000 }).should('exist').should('be.visible');
  }

  getAllSortOptions() {
    return cy.get('#input-sort-212403').find('option');
  }

  selectInStockFilter() {
    cy.scrollTo(0, '50%');
    cy.get('input[name="mz_fss"][value="-1"]').check({ force: true });
  }
  selectOutOfStockFilter() {
    cy.scrollTo(0, '50%');
    cy.get('input[name="mz_fss"][value="5"]').check({ force: true });
  }
  goToSecondPage() {
    cy.get('ul.pagination')
      .contains('2')
      .scrollIntoView()
      .click({ force: true });
  }
  goToProductCartPage() {
    cy.get('.product-thumb',).last().click();
  }
  addProductToCompare(){
    cy.get('[data-id="216844"]').click();
  }
  checkCompareMessage(){
    cy.contains('Success: You have added', { timeout: 5000 }).should('be.visible');
  }
  addLastProductToCart() {
    cy.get('.product-thumb',).last().within(() => {
      cy.contains('Add to Cart').click({ force: true });
    });
  }
  addFirstProductToCart() {
    cy.get('.product-thumb').first().within(() => {
      cy.contains('Add to Cart').click({ force: true });
    });
  }

  goToCart() {
    cy.reload();
    cy.get('.cart-icon').eq(0).click();
    cy.contains('Edit cart').click({ force: true });
  }

  proceedToCheckout() {
    cy.get('body').then(($body) => {
      const unavailableText = 'Products marked with *** are not available in the desired quantity or not in stock';
  
      if ($body.text().includes(unavailableText)) {
        cy.log('// if the product is unavailable, skip the click');
      } else {
        cy.contains('Checkout').click({ force: true });
        cy.url().should('include', 'checkout');
      }
    });
  }
  
  assertOnCheckoutPage() {
    cy.url().should('include', 'checkout');
  }
}
