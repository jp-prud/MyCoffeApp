import {Screen, Text} from '@components';

import {useOrderContext} from '../../../context/OrderContext/OrderContext';

export function CartScreen() {
  const {orderFormId, orderItems} = useOrderContext();

  console.log({orderItems});

  return (
    <Screen>
      <Text>{orderFormId}</Text>
    </Screen>
  );
}
