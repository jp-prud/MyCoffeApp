import {ListRenderItemInfo} from 'react-native';

import {OrderItem, useOrderContext} from '@context/OrderContext/OrderContext';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

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

      <Box gap="s16" mt="s10">
        {['Caffe Latte', 'Brown Suggar'].map(item => (
          <Box
            key={item}
            height={120}
            flexDirection="row"
            overflow="hidden"
            borderRadius="s16"
            backgroundColor="grayWhite"
            borderColor="gray4"
            borderWidth={1}
            style={[$shadowProps]}>
            <Box height={120} width={120} backgroundColor="grayBlack" />

            <Box p="s10">
              <Text semiBold>{item}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
