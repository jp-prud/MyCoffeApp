import {useNavigation} from '@react-navigation/native';

import {TouchableOpacityBox, Icon, Box, Text} from '@components';

export function CouponSugestion() {
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      gap="s16"
      mt="s24"
      pt="s20"
      pb="s20"
      borderColor="gray4"
      borderTopWidth={1}
      onPress={() => navigation.navigate('CouponScreen')}>
      <Icon name="ticket" />

      <Box>
        <Text>Cupom</Text>
        <Text preset="paragraphSmall" color="gray2">
          1 cupom disponível
        </Text>
      </Box>

      <TouchableOpacityBox
        flex={1}
        justifyContent="flex-end"
        flexDirection="row"
        onPress={() => navigation.navigate('CouponScreen')}>
        <Text color="primary" semiBold>
          Adicionar
        </Text>
      </TouchableOpacityBox>
    </TouchableOpacityBox>
  );
}
