import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    password: faker.internet.password(10)
  };
}
