import {ListRenderItemInfo} from 'react-native';

import {OrderItem, useOrderContext} from '@context/OrderContext/OrderContext';

import {Box, Button, Text, TouchableOpacityBox} from '@components';

export function SummaryStep() {
  const {orderItems} = useOrderContext();

  function renderOrderItem({item}: ListRenderItemInfo<OrderItem>) {
    return (
      <Box>
        <Text>{item.id}</Text>
        <Text>{item.quantity}</Text>
      </Box>
    );
  }

  console.log({orderItems, renderOrderItem});

  return (
    <Box>
      <Box
        flex={1}
        width="100%"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between">
        <Text preset="paragraphLarge" semiBold>
          Produtos
        </Text>

        <TouchableOpacityBox>
          <Text preset="paragraphSmall" color="primary" semiBold>
            Adicionar items
          </Text>
        </TouchableOpacityBox>
      </Box>
      <Button text="Continuar" />
    </Box>
  );
}
