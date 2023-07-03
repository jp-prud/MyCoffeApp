import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SuccessOrderScreen({
  navigation,
}: AppScreenProps<'SuccessOrderScreen'>) {
  console.log(navigation);

  return (
    <Screen>
      <Text>Pedido finalizado</Text>
    </Screen>
  );
}
