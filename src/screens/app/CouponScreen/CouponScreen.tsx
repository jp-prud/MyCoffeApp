import {
  Box,
  FormTextInput,
  Icon,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import {AppScreenProps} from '@routes';

export function CouponScreen({}: AppScreenProps<'CouponScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Cupom</Text>

      <Box>
        <FormTextInput />
        <TouchableOpacityBox>
          <Text>Adicionar</Text>
        </TouchableOpacityBox>
      </Box>

      <Box>
        <Box>
          <Icon name="arrow" />

          <Box>
            <Text>Sem cupom</Text>
            <Text>Nenhum cupom aplicado</Text>
          </Box>
        </Box>

        <Text>Válido para pedidos acima de R$ 15</Text>
      </Box>
    </Screen>
  );
}
