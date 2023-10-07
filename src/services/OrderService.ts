import {OrderPropsAPP, orderMockAPI} from '@domain';
import {Page} from '@types';
import {delay} from '@utils';

import APIMapper from './mappers/APIMapper';
import OrderMapper from './mappers/OrderMapper';

class OrderService {
  public async listOrders(): Promise<Page<OrderPropsAPP>> {
    await delay();

    return new Promise(resolve =>
      resolve({
        meta: APIMapper.toMetaDataPresentation(orderMockAPI.meta),
        data: orderMockAPI.data.map(OrderMapper.toPresentation),
      }),
    );
  }
}

export default new OrderService();
