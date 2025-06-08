
describe('Logowanie with data from fixture file', () => {
  beforeEach(() => {
    cy.fixture('loginData').as('data');
  });
  it('check login with incorrect data', function () {
    cy.login(this.data.invalidUser.email, this.data.invalidUser.password);
    cy.contains(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')
      .should('be.visible');
  });
  it('check login with correct data', function () {
    cy.login(this.data.validUser.email, this.data.validUser.password);
    cy.scrollTo(0, '100%');
    cy.contains('a.list-group-item', 'Logout').should('be.visible');  });

  
});
