import {useCallback} from 'react';

import {useOrderContext} from '@context';
import {formatPrice} from '@utils';

import {Box, Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {$shadowProps} from '@theme';

import {useCartScreen} from './useCartScreen';

export function CartScreen({}: AppTabScreenProps<'CartScreen'>) {
  const {orderItems, value} = useOrderContext();

  const {steps, CurretStep, currentStep, handleClickToggleStep} =
    useCartScreen();

  const renderFooterComponent = useCallback(() => {
    return (
      <Box
        p="s24"
        gap="s16"
        pt="s16"
        paddingHorizontal="s24"
        style={$shadowProps}
        backgroundColor="background">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text semiBold>Total sem a entrega</Text>

          <Text>
            {formatPrice(value)}{' '}
            <Text color="gray1" preset="paragraphSmall">
              / {orderItems.length} items
            </Text>
          </Text>
        </Box>

        <Button
          text={steps[currentStep].fixedContainer.label}
          onPress={steps[currentStep].fixedContainer.function}
        />
      </Box>
    );
  }, [currentStep, orderItems.length, steps, value]);

  return (
    <Screen
      canGoBack={currentStep === 'MiniCartStep'}
      scrollable={currentStep === 'CheckoutStep'}
      FooterComponent={orderItems.length > 0 && renderFooterComponent()}>
      <CurretStep onToggleStep={handleClickToggleStep} />
    </Screen>
  );
}
