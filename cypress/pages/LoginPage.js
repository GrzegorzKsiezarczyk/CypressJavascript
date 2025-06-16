
export class LoginPage {
  visit() {
    cy.visit('/index.php?route=account/login');
  }

  fillCredentials(email, password) {
  cy.get('[data-cy="input-email"]').type(email);
  cy.get('[data-cy="input-password"]').type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  assertLoggedIn() {
    cy.contains('a.list-group-item', 'Logout').should('be.visible');
  }
  LogOut(){
    cy.contains('a.list-group-item', 'Logout').should('be.visible').click()
  }
  forgottenpasswordlink(){
    cy.contains('Forgotten Password').should('be.visible').click()
  }
  fillemail(email){
    cy.get('#input-email').type(email);
  }
  continue(){
    cy.contains('Continue').should('be.visible').click()

  }

}
