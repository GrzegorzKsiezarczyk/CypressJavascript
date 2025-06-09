Cypress.Commands.add('register', (user) => {
  cy.visit('/index.php?route=account/register');
  cy.get('input[name="firstname"]').type(user.firstName);
  cy.get('input[name="lastname"]').type(user.lastName);
  cy.get('input[name="email"]').type(user.email);
  cy.get('input[name="telephone"]').type(user.telephone);
  cy.get('input[name="password"]').type(user.password);
  cy.get('input[name="confirm"]').type(user.password);
  cy.get('input[name="newsletter"][value="1"]').check({ force: true });
  cy.get('input[name="agree"][value="1"]').check({ force: true });
  cy.get('input[type="submit"]').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/index.php?route=account/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').first().click();
});
