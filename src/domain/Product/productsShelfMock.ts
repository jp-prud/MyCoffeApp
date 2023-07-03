import {ProductProps} from '@domain';

export const productsShelfMock: ProductProps[] = [
  {
    id: '1',
    name: 'Ice Cappuccino',
    price: 140,
    subtitle: 'Com leite',
    description:
      'Café gelado com leite e espuma de leite por cima e calda de chocolate. Servido com gelo e canudo biodegradável. Contém 140mg de cafeína. Conheça essa bebida gelada e deliciosa!',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'Ice Cappuccino',
      },
    ],
  },
  {
    id: '2',
    name: 'Caffe Latte',
    subtitle: 'Com leite',
    description:
      'Café gelado com leite e espuma de leite por cima e calda de chocolate. Servido com gelo e canudo biodegradável. Contém 140mg de cafeína. Conheça essa bebida gelada e deliciosa!',
    price: 110,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1575943669179-ca46975a41f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZmUlMjBsYXR0ZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Caffe Latte',
      },
    ],
  },
];
