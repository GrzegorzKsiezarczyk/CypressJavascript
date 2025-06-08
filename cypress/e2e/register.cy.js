
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
});
