import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';

describe('User Registration', () => {
  const registerPage = new RegisterPage();

  it('should register a new user successfully', () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: faker.internet.password(10)
    };

    registerPage.visit();
    registerPage.fillForm(user);
    registerPage.submit();
    registerPage.assertSuccess();
  });

  it('should show errors when submitting empty form', () => {
    registerPage.visit();
    registerPage.submit();
    cy.get('.alert-danger').should('contain', 'Warning: You must agree to the Privacy Policy!');
    cy.get('#input-firstname + .text-danger').should('exist');
  });

  it('should show error for invalid email address', () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: 'invalid-email',
      telephone: faker.phone.number(),
      password: faker.internet.password(10)
    };

    registerPage.visit();
    registerPage.fillForm(user);
    registerPage.submit();
  });

  it('should show error for too short password', () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: '12'
    };

    registerPage.visit();
    registerPage.fillForm(user);
    registerPage.submit();
    cy.get('#input-password + .text-danger').should('contain', 'Password must be between 4 and 20 characters!');
  });

  it('should show error when passwords do not match', () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: 'Test123!'
    };

    registerPage.visit();
    registerPage.fillForm(user);
    cy.get('#input-confirm').clear().type('DifferentPassword!');
    registerPage.submit();

    cy.get('.text-danger').should('contain', 'Password confirmation does not match password!');
  });

  it('should show error when privacy policy is not accepted', () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: 'Test123!'
    };

    registerPage.visit();
    registerPage.fillForm(user);
    cy.get('[name="agree"]').uncheck({ force: true });
    registerPage.submit();

    cy.get('.alert-danger').should('contain', 'You must agree to the Privacy Policy');
  });
});