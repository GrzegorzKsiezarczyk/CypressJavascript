describe('Intercept and mocking response HTML', () => {
  it('mocks a product page with fake HTML', () => {
    cy.intercept('GET', '**/index.php?route=product/product&*', {
      statusCode: 200,
      headers: {
        'content-type': 'text/html' // needed to use .visit 
      },
      body: `
        <html>
          <head><title>Mock</title></head>
          <body>
            <h1>Mocked Product</h1>
          </body>
        </html>
      `
    }).as('mockProduct');
    //Visit website but has routed to our HTML
    cy.visit('/index.php?route=product/product&product_id=40');
    cy.wait('@mockProduct');
    cy.contains('Mocked Product').should('be.visible');
  });
});