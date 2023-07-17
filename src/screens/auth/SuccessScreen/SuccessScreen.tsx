import {Screen, Text, Icon, Button, Box} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  navigation,
  route,
}: AuthScreenProps<'SuccessScreen'>) {
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
