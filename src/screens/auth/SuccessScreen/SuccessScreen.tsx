import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Text, Icon, Button, Box} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation, route}: ScreenProps) {
  function handleClickGoBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />

      <Box gap="s16" mt="s24" mb="s40">
        <Text preset="headingLarge">{route.params.title}</Text>
        <Text preset="paragraphLarge">{route.params.description}</Text>
      </Box>

      <Button onPress={handleClickGoBackToBegin} text="Voltar ao início" />
    </Screen>
  );
}
