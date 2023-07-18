import {useState, useCallback, useMemo} from 'react';

import {Steps, StepProps, MiniCartStep, CheckoutStep} from './steps';

export function useCartScreen() {
  const [currentStep, setCurrentStep] = useState<Steps>('MiniCartStep');

  const handleClickToggleStep = useCallback(() => {
    return setCurrentStep(prevState =>
      prevState === 'MiniCartStep' ? 'CheckoutStep' : 'MiniCartStep',
    );
  }, []);

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
          function: () => {},
        },
      },
    };

    return mappedSteps;
  }, [handleClickToggleStep]);

  const CurretStep = useMemo(
    () => steps[currentStep].step,
    [steps, currentStep],
  );

  return {currentStep, steps, CurretStep, handleClickToggleStep};
}
