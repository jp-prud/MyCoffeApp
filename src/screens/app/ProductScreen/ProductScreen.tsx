import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Box, TouchableOpacityBox, Text, Icon} from '@components';
import {RootStackParamList} from '@routes';

import {FixedActionsContainer} from './components/FixedActionsContainer/FixedActionsContainer';
import {OptionsSelector} from './components/OptionsSelector/OptionsSelector';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductScreen'>;

export function ProductScreen({route}: ScreenProps) {
  console.log(route);

  return (
    <>
      <Screen scrollable canGoBack>
        <Box height={320} backgroundColor="primary" borderRadius="s16" />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="s16">
          <Box gap="s4">
            <Text preset="headingMedium">Café Latte</Text>

            <Text color="gray2" semiBold>
              Com leite
            </Text>
          </Box>

          <TouchableOpacityBox>
            <Icon name="heart" color="error" />
          </TouchableOpacityBox>
        </Box>
        <Box marginVertical="s16" gap="s4">
          <Text bold>Descrição</Text>

          <Text preset="paragraphSmall" color="gray1">
            Lorem ipsum dolor sit amet, consectetur adipisicing lit. Eos facere
            tempora sint doloremque doloribus. Ratione!
            <Text color="primary" preset="paragraphSmall" semiBold>
              Ler mais...
            </Text>
          </Text>
        </Box>

        <OptionsSelector />

        <Box mt="s16">
          <Text semiBold color="gray1">
            Adicionais
          </Text>
        </Box>
      </Screen>

      <FixedActionsContainer />
    </>
  );
}
