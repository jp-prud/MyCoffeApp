import {useState} from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';

import {deliveryOptionsMock} from '@domain';

import {Badge, Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ProfileNavigator} from '../../ProfileScreen/components/ProfileNavigator';
import {CouponSugestion} from '../components/CouponSugestion/CouponSugestion';
import {DeliveryOptions} from '../components/DeliveryOptions/DeliveryOptions';

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

  const [selectedDeliveryOption] = useState(deliveryOptionsMock[0].id);

  return (
    <Box>
      {renderCustomBackButton()}

      <Box backgroundColor="grayBlack" height={120} borderRadius="s12" />

      <Box mt="s16">
        <Box alignItems="center" flexDirection="row">
          <Box flex={1} flexDirection="row" gap="s16" alignItems="center">
            <Icon name="bag" />

            <Text semiBold>Tempo de entrega</Text>
          </Box>

          <Text semiBold color="gray2" preset="paragraphSmall">
            25-35 min
          </Text>
        </Box>

        <Box mt="s20">
          <ScrollView
            horizontal
            contentContainerStyle={$deliveryOptionsWrapper}
            showsHorizontalScrollIndicator={false}>
            {deliveryOptionsMock.map(deliveryOption => (
              <DeliveryOptions
                {...deliveryOption}
                key={deliveryOption.id}
                active={deliveryOption.id === selectedDeliveryOption}
              />
            ))}
          </ScrollView>
        </Box>
      </Box>

      <Box mt="s32" gap="s16">
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

      <Box mt="s16">
        <Box
          flexDirection="row"
          alignItems="center"
          pt="s20"
          borderColor="gray4"
          borderTopWidth={1}>
          <Box flexDirection="row" gap="s16" flex={1}>
            <Icon name="card" />

            <Text semiBold>Pagamento na entrega</Text>
          </Box>

          <TouchableOpacityBox>
            <Text color="primary" semiBold>
              Alterar
            </Text>
          </TouchableOpacityBox>
        </Box>

        <TouchableOpacityBox
          flex={1}
          justifyContent="flex-start"
          alignItems="center"
          borderRadius="s12"
          borderColor="gray2"
          backgroundColor="gray5"
          borderWidth={1}
          p="s16"
          mt="s16"
          flexDirection="row"
          gap="s12">
          <Badge name="money" />

          <Text semiBold color="gray1">
            Dinheiro
          </Text>
        </TouchableOpacityBox>

        <CouponSugestion />
      </Box>
    </Box>
  );
}

const $deliveryOptionsWrapper: StyleProp<ViewStyle> = {
  gap: 12,
};
