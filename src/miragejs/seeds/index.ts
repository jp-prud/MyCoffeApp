import { Server } from 'miragejs';

function personSeeder(server: Server) {
  server.createList('person', 20);
}

function productSeeder(server: Server) {
  server.createList('product', 11);
}
// @ts-ignore
export default function seeds(server) {
  server.loadFixtures();

  personSeeder(server);
  productSeeder(server);
}
