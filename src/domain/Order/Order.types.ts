import {ProductSummaryCheckoutProps} from '@domain';

type StatusOptions = 'pending' | 'paid' | 'delivered' | 'canceled';

export interface OrderPropsAPP {
  id: string;
  userId: string;
  products: ProductSummaryCheckoutProps[];
  total: number;
  subtotal: number;
  createdAt: string;
  deliveryFee: number;
  paymentMethod: string;
  status: StatusOptions;
  address: {
    street: string;
    number: string;
    city: string;
    postalCode: string;
  };
}

export interface OrderPropsAPI {
  id: string;
  user_id: string;
  products: ProductSummaryCheckoutProps[];
  total: number;
  subtotal: number;
  created_at: string;
  delivery_fee: number;
  payment_method: string;
  status: StatusOptions;
  address: {
    street: string;
    number: string;
    city: string;
    postal_code: string;
  };
}

export interface DeliveryOptionsProps {
  id: string;
  name: string;
  price: number;
  deliveryTime: string;
}
