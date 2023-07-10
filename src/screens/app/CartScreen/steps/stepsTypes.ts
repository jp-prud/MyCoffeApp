export type Steps = 'MiniCartStep' | 'CheckoutStep';

export type StepProps = Record<
  Steps,
  {
    step: any;
    fixedContainer: {
      label: 'Continuar' | 'Finalizar Pedido';
      function(): void;
    };
  }
>;
