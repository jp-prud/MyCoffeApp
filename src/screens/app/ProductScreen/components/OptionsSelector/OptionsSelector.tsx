import {Text, Box, TouchableOpacityBox} from '@components';

export function OptionsSelector() {
  return (
    <Box
      gap="s16"
      paddingVertical="s20"
      borderTopWidth={1}
      borderBottomWidth={1}
      borderColor="gray4">
      <Box flexDirection="row" alignItems="center">
        <Box flex={1}>
          <Text color="gray1" semiBold>
            Açucar
          </Text>
        </Box>

        <Box flex={3} flexDirection="row" gap="s8">
          <TouchableOpacityBox
            flexGrow={1}
            backgroundColor="carrotSecondary"
            paddingHorizontal="s8"
            paddingVertical="s4"
            borderRadius="s16"
            borderWidth={1}
            borderColor="carrotSecondary">
            <Text
              textAlign="center"
              color="grayWhite"
              semiBold
              preset="paragraphSmall">
              Normal
            </Text>
          </TouchableOpacityBox>

          <TouchableOpacityBox
            flexGrow={1}
            paddingHorizontal="s8"
            paddingVertical="s4"
            borderRadius="s16"
            borderWidth={1}
            borderColor="gray2">
            <Text
              textAlign="center"
              color="gray2"
              semiBold
              preset="paragraphSmall">
              Pouco
            </Text>
          </TouchableOpacityBox>

          <TouchableOpacityBox
            flexGrow={1}
            paddingHorizontal="s8"
            paddingVertical="s4"
            borderRadius="s16"
            borderWidth={1}
            borderColor="gray2"
            alignItems="center">
            <Text
              textAlign="center"
              color="gray2"
              preset="paragraphSmall"
              semiBold>
              Sem
            </Text>
          </TouchableOpacityBox>
        </Box>
      </Box>
    </Box>
  );
}
