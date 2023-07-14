import { createServer } from 'miragejs';

import { factories } from './factories';
import { models } from './models';
import seeds from './seeds';

export function makeServer({ environment = 'development' }) {
  const server = createServer({
    environment,
    factories,
    models,
    routes() {
      this.namespace = 'api';

      this.resource('person');
      this.resource('product');
    },
    seeds,
  });

  return server;
}
