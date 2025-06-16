describe('Mobile layout', () => {
   
  it('should load correctly on mobile size', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('input[name="search"]').should('be.visible');
      cy.get('.carousel').should('be.visible'); 
    });
  });