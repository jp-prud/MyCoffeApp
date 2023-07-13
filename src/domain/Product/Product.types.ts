export interface ProductProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  images: [
    {
      url: string;
      alt: string;
    },
  ];
}

export interface ProductSummaryProps {
  id: string;
  name: string;
  price: number;
  images: {
    url: string;
    alt: string;
  }[];
}

export interface ProductSummaryCheckoutProps extends ProductSummaryProps {
  quantity: number;
  options?: {
    [key: string]: string;
  };
}
