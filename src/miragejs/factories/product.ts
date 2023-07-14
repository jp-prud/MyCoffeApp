import { ProductProps, productMock } from '@domain';
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

import { randomNumber } from './utils';

const productImagesUrl = productMock.map((product) => product.images[0].url);

const productName = productMock.map((product) => product.name);

export const productFactory = Factory.extend<Partial<ProductProps>>({
  id() {
    return faker.string.uuid();
  },
  name() {
    return productName[randomNumber(10)];
  },
  price() {
    return Number(faker.commerce.price());
  },
  subtitle() {
    return faker.commerce.productAdjective();
  },
  images() {
    return [
      {
        url: productImagesUrl[randomNumber(10)],
        alt: faker.commerce.productName(),
      },
    ];
  },
  description() {
    return faker.lorem.lines(4);
  },
});
