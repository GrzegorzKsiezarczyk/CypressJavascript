import { LoginPage } from '../pages/LoginPage';

// Login test suite using fixture-based test data and Page Object pattern
describe('Login functionality using fixture data', () => {
  const login = new LoginPage();

  // Before each test: clear cookies, localStorage and load fixture data
  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture('loginData').as('data');
  });

  it('Login with completely incorrect credentials', function () {
    cy.login(this.data.invalidUser.email, this.data.invalidUser.password);

    cy.checkBlockedLogin().then((isBlocked) => {
      if (isBlocked) return Cypress._.noop(); // Account is blocked – skip further checks
      cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
  });

  it('Login with incorrect email and correct password', function () {
    cy.login(this.data.invalidUser.email, this.data.validUser.password);

    cy.checkBlockedLogin().then((isBlocked) => {
      if (isBlocked) return Cypress._.noop();
      cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
  });

  it('Login with correct email and incorrect password', function () {
    cy.login(this.data.validUser.email, this.data.invalidUser.password);

    cy.checkBlockedLogin().then((isBlocked) => {
      if (isBlocked) return Cypress._.noop();
      cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
  });

  it('Login with invalid email format (frontend validation)', function () {
    cy.login(this.data.invalidData.email, this.data.invalidData.password);

    cy.checkBlockedLogin().then((isBlocked) => {
      if (isBlocked) return Cypress._.noop();
      cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
  });

  it('Login with valid credentials, then logout', function () {
    cy.login(this.data.validUser.email, this.data.validUser.password);

    cy.contains('a.list-group-item', 'Logout').scrollIntoView().should('be.visible');
    login.LogOut();
    cy.contains('.page-title.my-3', ' Account Logout').should('be.visible');
  });

  it('Login with empty form submission', function () {
    login.visit();
    login.submit();

    cy.checkBlockedLogin().then((isBlocked) => {
      if (isBlocked) return Cypress._.noop();
      cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
  });

  it('Login - reset password flow', function () {
    login.visit();
    login.forgottenpasswordlink();
    login.fillemail(this.data.validUser.email);
    login.continue();

    cy.contains('An email with a confirmation link has been sent your email address.').should('be.visible');
  });
});
