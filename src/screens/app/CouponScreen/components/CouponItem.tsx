import {CouponProps} from '@domain';

import {Box, Icon, Text} from '@components';

export function CouponItem({coupon}: {coupon: CouponProps}) {
  return (
    <Box p="s16" borderWidth={1} borderColor="gray4" borderRadius="s8">
      <Box flexDirection="row" gap="s16" alignItems="center" mb="s12">
        <Icon name="ticket" />

        <Box flex={1}>
          <Text semiBold>{coupon.title}</Text>
          {coupon.subtitle && (
            <Text color="gray1" preset="paragraphSmall">
              {coupon.subtitle}
            </Text>
          )}
        </Box>

        <Box
          backgroundColor="gray1"
          borderRadius="s32"
          height={24}
          width={24}
        />
      </Box>

      {coupon.description && (
        <Text color="gray1" preset="paragraphSmall">
          {coupon.description}
        </Text>
      )}
    </Box>
  );
}
