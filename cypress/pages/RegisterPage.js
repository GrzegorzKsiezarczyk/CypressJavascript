export class RegisterPage {
  visit() {
    cy.visit('/index.php?route=account/register');
  }

  fillForm({ firstName, lastName, email, telephone, password }) {
    cy.get('#input-firstname').clear().type(firstName);
    cy.get('#input-lastname').clear().type(lastName);
    cy.get('#input-email').clear().type(email);
    cy.get('#input-telephone').clear().type(telephone);
    cy.get('#input-password').clear().type(password);
    cy.get('#input-confirm').clear().type(password); // confirm = password domyślnie
    cy.get('[name="agree"]').check({ force: true });
    cy.get('[name="newsletter"]').check({ force: true });
  }

  submit() {
    cy.get('input[type="submit"][value="Continue"]').click();
  }

  assertSuccess() {
    cy.get('h1').should('contain', 'Your Account Has Been Created!');
  }
}