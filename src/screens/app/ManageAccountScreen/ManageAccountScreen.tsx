import {Box, Icon, Screen, Text, TouchableOpacityBox} from '@components';
import {AppScreenProps} from '@routes';

export function ManageAccountScreen({}: AppScreenProps<'ManageAccountScreen'>) {
  return (
    <Screen scrollable canGoBack>
      <Box pt="s16" gap="s8" borderTopColor="gray4" borderTopWidth={1}>
        <Text preset="headingSmall">Gerencia sua conta</Text>
        <Text>
          Solicitar um arquivo de seus dados pessoais ou excluir sua conta
        </Text>

        <TouchableOpacityBox
          backgroundColor="gray4"
          alignItems="center"
          gap="s12"
          flexDirection="row"
          paddingVertical="s4"
          paddingHorizontal="s16"
          borderRadius="s12"
          mt="s4"
          alignSelf="flex-start">
          <Text semiBold>Gerenciar conta</Text>

          <Icon name="arrow" />
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
