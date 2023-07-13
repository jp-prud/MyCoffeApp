import {formatPrice} from '@utils';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ProfileNavigator} from '../../ProfileScreen/components/ProfileNavigator';

interface CheckoutStepProps {
  onToggleStep(): void;
}

export function CheckoutStep({onToggleStep}: CheckoutStepProps) {
  function renderCustomBackButton() {
    return (
      <TouchableOpacityBox
        mb="s24"
        gap="s8"
        flexDirection="row"
        alignItems="center"
        onPress={onToggleStep}>
        <Box
          width={22}
          style={{
            transform: [
              {
                scale: -1,
              },
            ],
          }}>
          <Icon name="arrow" color="primary" />
        </Box>

        <Text preset="paragraphMedium" semiBold>
          Voltar
        </Text>
      </TouchableOpacityBox>
    );
  }

  return (
    <Box>
      {renderCustomBackButton()}

      <Box backgroundColor="grayBlack" height={120} borderRadius="s12" />

      <Box mt="s16">
        <Box alignItems="center" flexDirection="row">
          <Box flex={1} flexDirection="row" gap="s16" alignItems="flex-end">
            <Icon name="bag" />

            <Text semiBold>Tempo de entrega</Text>
          </Box>

          <Text semiBold color="gray3">
            25-35 min
          </Text>
        </Box>

        <Box mt="s20" alignItems="center" flexDirection="row" gap="s12">
          <Box
            borderWidth={1}
            borderColor="gray4"
            p="s14"
            borderRadius="s12"
            flexGrow={1}
            flex={1}
            minHeight={120}>
            <Text bold>Expressa</Text>
            <Text semiBold>20-30 min</Text>
            <Text semiBold color="primary">
              Direto para você
            </Text>
            <Text semiBold>{formatPrice(2.99)}</Text>
          </Box>

          <Box
            borderWidth={1}
            borderColor="gray4"
            p="s14"
            borderRadius="s12"
            flex={1}
            flexGrow={1}
            minHeight={120}>
            <Text bold>Expressa</Text>
            <Text semiBold>20-30 min</Text>
            <Text semiBold>{formatPrice(2.99)}</Text>
          </Box>
        </Box>
      </Box>

      <Box mt="s20" gap="s16">
        <ProfileNavigator
          title="1226 University Drive, 1226"
          subtitle="Menlo Park, CA 94025"
          icon="home"
          isSibling
        />
        <ProfileNavigator
          title="Contato"
          subtitle="Fone: (47) 99708-6662"
          icon="call"
        />
      </Box>

      <Box mt="s20">
        <Text preset="paragraphLarge" bold>
          Pagamento
        </Text>
      </Box>
    </Box>
  );
}
