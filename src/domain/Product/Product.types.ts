export interface ProductPropsAPP {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  categoryId: string;
  images: [
    {
      url: string;
      alt: string;
    },
  ];
}

export interface ProductPropsAPI {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  category_id: string;
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

export interface CategoryProps {
  id: string;
  name: string;
  descrption?: string;
}

export interface CategoryPagePropsAPI extends CategoryProps {
  products: ProductPropsAPI[];
}

export interface CategoryPagePropsAPP extends CategoryProps {
  products: ProductPropsAPP[];
}
