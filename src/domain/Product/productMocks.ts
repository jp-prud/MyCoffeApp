import {PageAPI} from '@api';

import {ProductPropsAPI, ProductSummaryCheckoutProps} from './Product.types';

export const productMockAPI: PageAPI<ProductPropsAPI> = {
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
      name: 'Expresso',
      subtitle: 'Intenso e encorpado',
      price: 2.99,
      description:
        'Um café concentrado feito ao forçar água quente através de grãos de café moídos finamente.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/B9K9xAX.jpg',
          alt: 'Expresso',
        },
      ],
    },
    {
      id: '2',
      name: 'Expresso com Leite',
      subtitle: 'Combinação perfeita',
      price: 3.49,
      description:
        'Uma combinação de café expresso e leite quente, resultando em uma bebida suave e saborosa.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/gBhsXEr.png',
          alt: 'Expresso com Leite',
        },
      ],
    },
    {
      id: '3',
      name: 'Cappuccino Brasileiro',
      subtitle: 'Sabor autêntico',
      price: 4.99,
      description:
        'Um cappuccino tradicional com um toque brasileiro, feito com café expresso, leite vaporizado e uma pitada de chocolate em pó.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/ha5wYd2.png',
          alt: 'Cappuccino Brasileiro',
        },
      ],
    },
    {
      id: '4',
      name: 'Casquinha',
      subtitle: 'Crocante e deliciosa',
      price: 1.99,
      description:
        'Uma casquinha de sorvete com uma dose de café expresso, perfeita para os amantes de café e sorvete.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/RtvZF7B.png',
          alt: 'Casquinha',
        },
      ],
    },
    {
      id: '5',
      name: 'Cappuccino Avelã',
      subtitle: 'Sabor delicado de avelã',
      price: 4.99,
      description:
        'Um cappuccino cremoso com um toque delicado de sabor de avelã, perfeito para os apreciadores de sabores especiais.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/NkDzaWM.png',
          alt: 'Cappuccino Avelã',
        },
      ],
    },
    {
      id: '6',
      name: 'Café Nutella',
      subtitle: 'Café com toque de avelã',
      price: 3.99,
      description:
        'Um café especial com um toque de creme de avelã, proporcionando uma experiência única e deliciosa.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/WLxm4Ev.png',
          alt: 'Café Nutella',
        },
      ],
    },
    {
      id: '7',
      name: 'Mocha',
      subtitle: 'Chocolate e café juntos',
      price: 4.49,
      description:
        'Uma combinação perfeita de café expresso, leite vaporizado e chocolate, resultando em uma bebida rica e saborosa.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/XnWWeSw.png',
          alt: 'Mocha',
        },
      ],
    },
    {
      id: '8',
      name: 'Chai Latte',
      subtitle: 'Especiarias e chá',
      price: 3.99,
      description:
        'Uma bebida quente e reconfortante feita com chá preto, leite vaporizado e uma mistura de especiarias, perfeita para os amantes de sabores e exóticos.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/gAcJbIL.png',
          alt: 'Chai Latte',
        },
      ],
    },
    {
      id: '9',
      name: 'Hot Salted Caramel',
      subtitle: 'Doce e salgado',
      price: 4.99,
      description:
        'Uma bebida quente e indulgente feita com café expresso, leite vaporizado e um toque de caramelo salgado, proporcionando um equilíbrio perfeito de sabores.',
      category_id: '1',
      images: [
        {
          url: 'https://i.imgur.com/nwyU7BC.png',
          alt: 'Hot Salted Caramel',
        },
      ],
    },
    {
      id: '10',
      name: 'Caffè Latte',
      subtitle: 'Suave e cremoso',
      price: 3.99,
      description:
        'Um café suave e cremoso feito com café expresso e uma quantidade generosa de leite vaporizado, proporcionando uma experiência agradável a cada gole.',
      category_id: '2',
      images: [
        {
          url: 'https://i.imgur.com/SXBmQYJ.png',
          alt: 'Caffè Latte',
        },
      ],
    },
    {
      id: '11',
      name: 'Chocolate Quente',
      subtitle: 'Conforto em uma xícara',
      price: 3.49,
      description:
        'Uma deliciosa bebida quente de chocolate feita com chocolate de alta qualidade e leite cremoso, perfeita para aquecer os dias mais frios.',
      category_id: '2',
      images: [
        {
          url: 'https://i.imgur.com/L74ydc2.png',
          alt: 'Chocolate Quente',
        },
      ],
    },
  ],
};

export const productsShelfMock: ProductPropsAPI[] = [
  {
    id: '1',
    name: 'Ice Cappuccino',
    subtitle: 'Com leite',
    price: 14,
    description:
      'Café gelado com leite e espuma de leite por cima e calda de chocolate. Servido com gelo e canudo biodegradável. Contém 140mg de cafeína. Conheça essa bebida gelada e deliciosa!',
    category_id: '1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-.jpg4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'Ice Cappuccino',
      },
    ],
  },
];

export const productCartMock: ProductSummaryCheckoutProps[] = [
  {
    id: '1',
    name: 'Ice Cappuccino',
    price: 10.99,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-.jpg4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'Image 1',
      },
    ],
    quantity: 5,
    options: {
      size: 'Medium',
    },
  },
  {
    id: '2',
    name: 'Caramel Frappé',
    price: 25.0,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4..jpg0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'Caramel Frappé',
      },
    ],
    quantity: 2,
    options: {
      size: 'Large',
    },
  },
];
// https://i.imgur.com/a/wvbZFmi
// https://i.imgur.com/a/CWwRM2m
