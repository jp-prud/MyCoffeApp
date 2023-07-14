import { Response, Server } from 'miragejs';

import { AppSchema } from '../types/types';

export function routesForUsers(server: Server) {
  server.get('/users', (schema: AppSchema) => {
    const users = schema.all('person');

    return new Response(200, {}, users);
  });
}
