import { ProductPropsAPP, productMockAPI } from '@domain';
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

import { randomNumber } from './utils';

const productImagesUrl = productMockAPI.data.map((product) => product.images[0].url);

const productName = productMockAPI.data.map((product) => product.name);

export const productFactory = Factory.extend<Partial<ProductPropsAPP>>({
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
