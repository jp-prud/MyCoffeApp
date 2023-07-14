import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

import { Person } from '../types/types';

export const person = Factory.extend<Partial<Person>>({
  get firstName() {
    return faker.name.firstName();
  },
  get lastName() {
    return faker.name.lastName();
  },
  get name() {
    return faker.name.firstName();
  },
  get streetAddress() {
    return faker.address.streetAddress();
  },
  get cityStateZip() {
    return faker.address.cityName();
  },
  get phone() {
    return faker.phone.number();
  },
  get username() {
    return faker.internet.userName(this.firstName, this.lastName);
  },
  get password() {
    return faker.internet.password();
  },
  get email() {
    return faker.internet.email(this.firstName, this.lastName);
  },
  get avatar() {
    return faker.internet.avatar();
  },
});
