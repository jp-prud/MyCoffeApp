import {ProductProps} from './Product.types';

export const productMock: ProductProps = {
  id: '1',
  name: 'Ice Cappuccino',
  subtitle: 'Com leite',
  description:
    'Café gelado com leite e espuma de leite por cima e calda de chocolate. Servido com gelo e canudo biodegradável. Contém 140mg de cafeína. Conheça essa bebida gelada e deliciosa!',
  price: 140,
  images: [
    {
      alt: 'Ice Cappuccino',
      url: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ],
};
