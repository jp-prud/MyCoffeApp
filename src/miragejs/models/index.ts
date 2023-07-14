import { ProductProps } from '@domain';
import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';

import { Person } from '../types/types';

// import { User } from '../../types';

const PersonModel: ModelDefinition<Person> = Model.extend<Partial<Person>>({});

const ProductModel: ModelDefinition<ProductProps> = Model.extend<Partial<ProductProps>>({});

export const models = {
  person: PersonModel,
  product: ProductModel,
};
