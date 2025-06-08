describe('Log in with use commands', () => {
  beforeEach(() => {
    cy.fixture('loginData').as('data');
  });

  it('logIn with correct data', function () {
    cy.login(this.data.validUser.email, this.data.validUser.password);
    cy.scrollTo(0, '100%');
    cy.contains('a.list-group-item', 'Logout').should('be.visible');
  });
});