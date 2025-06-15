import { LoginPage } from '../pages/LoginPage';

//Login test suite using fixture-based test data and Page Object pattern
describe('Login functionality using fixture data', () => {
// Load test data from fixture file before each test
  beforeEach(function () {
    cy.fixture('loginData').as('data');
  });
  //Initialize Page Object
  const login = new LoginPage();
//Test: login with completely incorrect credentials
  it('check login with incorrect data', function () {
    cy.login(this.data.invalidUser.email, this.data.invalidUser.password);
    cy.contains('Warning: No match for E-Mail Address and/or Password.')
      .should('be.visible');
  });
  //Test: login with incorrect email and correct password
  it('check login with incorrect email', function () {
    cy.login(this.data.invalidUser.email, this.data.validUser.password);
    cy.contains('Warning: No match for E-Mail Address and/or Password.')
      .should('be.visible');
  });
//Test: login with correct email and incorrect password
   it('check login with incorrect password', function () {
    cy.login(this.data.validUser.email, this.data.invalidUser.password);
    cy.contains('Warning: No match for E-Mail Address and/or Password.')
      .should('be.visible');
  });
  //Test: invalid email format
  it('Login – invalid email format (frontend validation)', function () {
    cy.login(this.data.invalidData.email, this.data.invalidData.password);
    cy.contains('Warning: No match for E-Mail Address and/or Password.')
      .should('be.visible');
});
//Test: successful login and logout process
  it('Login - correct credentials, success and logout', function () {
    cy.login(this.data.validUser.email, this.data.validUser.password);
    cy.contains('a.list-group-item', 'Logout').scrollIntoView().should('be.visible');
    login.LogOut()
    cy.contains('.page-title.my-3', ' Account Logout').should('be.visible'); 
   });
//Test: empty form submission
  it('Login - empty fields', function () {
    login.visit()
    login.submit()
    cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    });
//Test: password reset functionality
  it('Login - reset password', function () {
    login.visit()
    login.forgottenpasswordlink()
    login.fillemail(this.data.validUser.email)
    login.continue()
    cy.contains('An email with a confirmation link has been sent your email address.').should('be.visible');
    });
});