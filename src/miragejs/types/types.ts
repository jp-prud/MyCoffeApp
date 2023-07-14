import { Registry } from 'miragejs';
import Schema from 'miragejs/orm/schema';

import { factories } from '../factories';
import { models } from '../models';

type AppRegistry = Registry<typeof models, typeof factories>;
export type AppSchema = Schema<AppRegistry>;

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
};
