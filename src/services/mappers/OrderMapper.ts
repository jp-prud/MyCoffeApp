import {OrderPropsAPI, OrderPropsAPP} from '@domain';

class OrderMapper {
  toPresentation(order: OrderPropsAPI): OrderPropsAPP {
    return {
      id: order.id,
      address: {
        city: order.address.city,
        number: order.address.number,
        postalCode: order.address.postal_code,
        street: order.address.street,
      },
      createdAt: order.created_at,
      deliveryFee: order.delivery_fee,
      paymentMethod: order.payment_method,
      status: order.status,
      subtotal: order.subtotal,
      products: order.products,
      total: order.total,
      userId: order.user_id,
    };
  }
}

export default new OrderMapper();
