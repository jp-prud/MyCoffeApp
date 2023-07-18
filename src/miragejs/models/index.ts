import { ProductPropsAPP } from '@domain';
import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';

import { Person } from '../types/types';

// import { User } from '../../types';

const PersonModel: ModelDefinition<Person> = Model.extend<Partial<Person>>({});

const ProductModel: ModelDefinition<ProductPropsAPP> = Model.extend<Partial<ProductPropsAPP>>({});

export const models = {
  person: PersonModel,
  product: ProductModel,
};
