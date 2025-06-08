
import { generateUser } from '../factories/userFactory';

Cypress.Commands.add('register', (user) => {
  cy.visit('/index.php?route=account/register');
  cy.get('#input-firstname').type(user.firstName);
  cy.get('#input-lastname').type(user.lastName);
  cy.get('#input-email').type(user.email);
  cy.get('#input-telephone').type(user.telephone);
  cy.get('#input-password').type(user.password);
  cy.get('#input-confirm').type(user.password);
  cy.get('input[name="newsletter"][value="1"]').check({ force: true }); // optional
  cy.get('input[name="agree"][value="1"]').check({ force: true });
  cy.get('input[type="submit"]').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/index.php?route=account/login');
  cy.get('#input-email').type(email);
  cy.get('#input-password').type(password);
  cy.get('input[type="submit"]').click();
});
