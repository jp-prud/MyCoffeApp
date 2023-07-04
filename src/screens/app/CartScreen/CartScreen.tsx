import {useMemo, useState} from 'react';

import {useOrderContext} from '@context';
import {formatPrice} from '@utils';

import {Box, Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {$shadowProps} from '@theme';

import {PaymentStep, ShippingStep, SummaryStep} from './steps';
import {Steps} from './steps/stepsTypes';

type StepProps = Record<
  Steps,
  {
    step: any;
    fixedContainer: {
      label: 'Continuar' | 'Finalizar';
      function(): void;
    };
  }
>;

export function CartScreen({}: AppTabScreenProps<'CartScreen'>) {
  const {orderItems, value} = useOrderContext();

  const [currentStep, setCurrentStep] = useState<Steps>('SummaryStep');

  function handleClickNextStep() {
    return setCurrentStep(prevState =>
      prevState === 'SummaryStep' ? 'ShippingStep' : 'PaymentStep',
    );
  }

  const steps = useMemo(() => {
    const mappedSteps: StepProps = {
      SummaryStep: {
        step: SummaryStep,
        fixedContainer: {
          label: 'Continuar',
          function: () => handleClickNextStep(),
        },
      },
      ShippingStep: {
        step: ShippingStep,
        fixedContainer: {
          label: 'Continuar',
          function: () => handleClickNextStep(),
        },
      },
      PaymentStep: {
        step: PaymentStep,
        fixedContainer: {
          label: 'Finalizar',
          function: () => {},
        },
      },
    };

    return mappedSteps;
  }, []);

  const CurretStep = useMemo(
    () => steps[currentStep].step,
    [steps, currentStep],
  );

  return (
    <Screen
      canGoBack
      scrollable
      FooterComponent={
        orderItems.length > 0 && (
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
              <Text semiBold>Total a pagar</Text>

              <Text>{formatPrice(value)}</Text>
            </Box>

            <Button
              text={steps[currentStep].fixedContainer.label}
              onPress={steps[currentStep].fixedContainer.function}
            />
          </Box>
        )
      }>
      <CurretStep />
    </Screen>
  );
}
