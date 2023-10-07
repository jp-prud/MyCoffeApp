import {DeliveryOptionsProps} from '@domain';
import {formatPrice} from '@utils';

import {Box, BoxProps, Text} from '@components';

interface Props {
  active: boolean;
}

export function DeliveryOptions({
  name,
  price,
  deliveryTime,
  active,
}: DeliveryOptionsProps & Props) {
  return (
    <Box
      borderWidth={1}
      borderColor="gray4"
      p="s14"
      borderRadius="s8"
      flexGrow={1}
      flex={1}
      minWidth={160}
      {...(active && $activeDeliveryOption)}>
      <Text
        semiBold
        preset="paragraphSmall"
        color={active ? 'primary' : 'grayBlack'}>
        {name}
      </Text>
      <Text semiBold color="gray2" preset="paragraphSmall">
        {deliveryTime}
      </Text>

      <Text semiBold preset="paragraphSmall">
        {formatPrice(price)}
      </Text>
    </Box>
  );
}

const $activeDeliveryOption: BoxProps = {
  borderColor: 'primary',
};
