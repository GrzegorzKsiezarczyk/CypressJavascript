
export class RegisterPage {
  visit() {
    cy.visit('/index.php?route=account/register');
  }

  fillForm({ firstName, lastName, email,telephone, password }) {
    cy.get('#input-firstname').type(firstName);
    cy.get('#input-lastname').type(lastName);
    cy.get('#input-email').type(email);
    cy.get('#input-telephone').type(telephone);
    cy.get('#input-password').type(password);
    cy.get('#input-confirm').type(password);
    cy.get('input[name="newsletter"][value="1"]').check({ force: true }); // optional
    cy.get('input[name="agree"][value="1"]').check({ force: true });
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  assertSuccess() {
    cy.contains('Your Account Has Been Created!').should('be.visible');
  }
}