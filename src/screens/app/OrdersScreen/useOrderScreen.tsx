import {useEffect, useState} from 'react';

import {OrderPropsAPP} from '@domain';
import {MetaDataPage, Page} from '@types';

import OrderService from '../../../services/OrderService';

export function useOrderScreen() {
  const [orders, setOrders] = useState<Page<OrderPropsAPP>>({
    meta: {} as MetaDataPage,
    data: [],
  });

  useEffect(() => {
    (async () => {
      const response = await OrderService.listOrders();

      setOrders(response);
    })();
  }, []);

  useEffect(() => console.log(orders), [orders]);

  return {orders};
}
