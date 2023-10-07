import {useState, useCallback, useMemo} from 'react';

import {useOrderContext} from '@context';
import {ProductPropsAPP} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '@routes';

import {Steps, StepProps, MiniCartStep, CheckoutStep} from './steps';

export type OptionContentBottomSheet =
  | 'specialRequest'
  | 'removeItem'
  | 'aboutDelivery';

export function useCartScreen() {
  const [currentStep, setCurrentStep] = useState<Steps>('MiniCartStep');
  const [optionContentBottomSheet, setOptionContentBottomSheet] =
    useState<OptionContentBottomSheet>('specialRequest');

  const [specialRequestMessage, setSpecialRequsetMessage] = useState<
    undefined | string
  >(undefined);

  const {handleRemoveItem} = useOrderContext();

  const {reset} = useNavigation();

  const handleClickSpecialRequest = useCallback(() => {
    setOptionContentBottomSheet('specialRequest');
  }, []);

  const handleClickRemoveItem = useCallback(
    (selectedProductId: ProductPropsAPP['id']) => {
      handleRemoveItem(selectedProductId);
    },
    [handleRemoveItem],
  );

  const handleClickToggleStep = useCallback(() => {
    return setCurrentStep(prevState =>
      prevState === 'MiniCartStep' ? 'CheckoutStep' : 'MiniCartStep',
    );
  }, []);

  const handleResetNavigation = useCallback(
    (params: RootStackParamList['OrderPlacedScreen']) => {
      reset({
        index: 1,
        routes: [
          {
            name: 'AppTabNavigator',
          },
          {
            name: 'OrderPlacedScreen',
            params,
          },
        ],
      });
    },
    [reset],
  );

  const steps = useMemo(() => {
    const mappedSteps: StepProps = {
      MiniCartStep: {
        step: MiniCartStep,
        fixedContainer: {
          label: 'Continuar',
          function: () => handleClickToggleStep(),
        },
      },
      CheckoutStep: {
        step: CheckoutStep,
        fixedContainer: {
          label: 'Finalizar Pedido',
          function: () =>
            handleResetNavigation({
              orderId: '123',
            }),
        },
      },
    };

    return mappedSteps;
  }, [handleClickToggleStep, handleResetNavigation]);

  const CurretStep = useMemo(
    () => steps[currentStep].step,
    [steps, currentStep],
  );

  return {
    currentStep,
    steps,
    CurretStep,
    optionContentBottomSheet,
    specialRequestMessage,
    handleClickToggleStep,
    setSpecialRequsetMessage,
    handleClickSpecialRequest,
    handleClickRemoveItem,
    setOptionContentBottomSheet,
  };
}
