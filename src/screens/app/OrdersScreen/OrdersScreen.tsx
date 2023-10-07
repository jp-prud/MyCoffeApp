import {SectionList, SectionListRenderItemInfo} from 'react-native';

import {OrderPropsAPP} from '@domain';

import {Screen, Box, Text} from '@components';

import {useOrderScreen} from './useOrderScreen';

export function OrdersScreen() {
  const {orders} = useOrderScreen();

  function renderItem({item}: SectionListRenderItemInfo<OrderPropsAPP>) {
    return <Text>{item.id}</Text>;
  }

  return (
    <Screen>
      <SectionList
        sections={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Box>
        <Text>OutletScreen</Text>
      </Box>
    </Screen>
  );
}
