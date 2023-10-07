import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {OptionContentBottomSheet} from '../../useCartScreen';

export function SpecialRequest({
  onShowBottomSheet,
}: {
  onShowBottomSheet(optionName: OptionContentBottomSheet): void;
}) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      gap="s12"
      justifyContent="space-between"
      mb="s32"
      onPress={() => onShowBottomSheet('specialRequest')}>
      <Box flexDirection="row" gap="s16" alignItems="center" flex={2}>
        <Icon name="messageText" />

        <Box flexDirection="column" flex={1}>
          <Text preset="paragraphSmall" semiBold>
            Envie uma mensagem para nós
          </Text>
          <Text color="gray2" preset="paragraphSmall">
            Pedido especial, alergias, restrição alimentar ?
          </Text>
        </Box>
      </Box>

      <Icon name="chevron" />
    </TouchableOpacityBox>
  );
}
