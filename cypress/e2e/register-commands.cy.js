
import { generateUser } from '../factories/userFactory';

describe('Registration process with use command', () => {
  it('Log In with correct data', () => {
    const user = generateUser();
    cy.register(user);
    cy.contains('Your Account Has Been Created!').should('be.visible');
  });
});
