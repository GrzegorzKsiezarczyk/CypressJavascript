
export class LoginPage {
  visit() {
    cy.visit('/index.php?route=account/login');
  }

  fillCredentials(email, password) {
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  assertLoggedIn() {
    cy.contains('a.list-group-item', 'Logout').should('be.visible');
  }
}
