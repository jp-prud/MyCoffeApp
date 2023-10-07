import {PageAPI} from '@api';

import {DeliveryOptionsProps, OrderPropsAPI} from './Order.types';

export const orderMockAPI: PageAPI<OrderPropsAPI> = {
  meta: {
    total: 11,
    per_page: 10,
    current_page: 1,
    last_page: 2,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=2',
    next_page_url: '/?page=2',
    previous_page_url: null,
  },
  data: [
    {
      id: '1',
      user_id: 'user123',
      products: [
        {
          id: 'p1',
          name: 'Produto 1',
          price: 10.99,
          images: [{url: 'url_da_imagem_1', alt: 'Imagem do Produto 1'}],
          quantity: 2,
          options: {size: 'M', color: 'Azul'},
        },
        // Mais produtos podem ser adicionados aqui...
      ],
      total: 25.98,
      subtotal: 21.98,
      created_at: '2023-07-13T10:00:00',
      delivery_fee: 4,
      payment_method: 'Cartão de Crédito',
      status: 'delivered',
      address: {
        street: 'Rua das Flores',
        number: '123',
        city: 'São Paulo',
        postal_code: '01234-567',
      },
    },
    {
      id: '2',
      user_id: 'user456',
      products: [
        {
          id: 'p2',
          name: 'Produto 2',
          price: 15.5,
          images: [{url: 'url_da_imagem_2', alt: 'Imagem do Produto 2'}],
          quantity: 1,
        },
        // Mais produtos podem ser adicionados aqui...
      ],
      total: 15.5,
      subtotal: 15.5,
      created_at: '2023-07-13T11:30:00',
      delivery_fee: 0,
      payment_method: 'Boleto Bancário',
      status: 'pending',
      address: {
        street: 'Av. Principal',
        number: '456',
        city: 'Rio de Janeiro',
        postal_code: '98765-432',
      },
    },
    // Mais pedidos podem ser adicionados aqui...
  ],
};

export const deliveryOptionsMock: DeliveryOptionsProps[] = [
  {
    id: '1',
    name: 'Normal',
    price: 5,
    deliveryTime: '45-60 minutos',
  },
  {
    id: '2',
    name: 'Entrega Expressa',
    price: 10,
    deliveryTime: '20-30 minutos',
  },
  {
    id: '3',
    name: 'Retirada',
    price: 0,
    deliveryTime: '10-15 minutos',
  },
];
