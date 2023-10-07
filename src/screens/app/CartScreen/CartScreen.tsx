import {useCallback} from 'react';

import {useOrderContext} from '@context';
import {formatPrice} from '@utils';

import {BottomSheet, Box, Button, Screen, Text, TextInput} from '@components';
import {useBottomSheet} from '@hooks';
import {AppTabScreenProps} from '@routes';
import {$shadowProps} from '@theme';

import {OptionContentBottomSheet, useCartScreen} from './useCartScreen';

export function CartScreen({}: AppTabScreenProps<'CartScreen'>) {
  const {orderItems, value} = useOrderContext();
  const {bottomSheetRef, handleToggleBottomSheet} = useBottomSheet();

  const {
    steps,
    CurretStep,
    currentStep,
    handleClickToggleStep,
    specialRequestMessage,
    setSpecialRequsetMessage,
    optionContentBottomSheet,
    setOptionContentBottomSheet,
  } = useCartScreen();

  const renderFooterComponent = useCallback(() => {
    return (
      <>
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
      </>
    );
  }, [currentStep, orderItems.length, steps, value]);

  function renderRemoveItemMessageContent() {
    return (
      <Box>
        <Box>
          <Text preset="headingMedium" bold mb="s8">
            Remover item
          </Text>
          <Text color="gray2">
            Você tem certeza que deseja remover este produto do seu carrinho ?
          </Text>
        </Box>

        <Button text="Remover" mt="s24" onPress={() => {}} />
        <Button
          text="Cencelar"
          preset="outline"
          mt="s16"
          onPress={handleToggleBottomSheet}
        />
      </Box>
    );
  }

  function renderSpecialRequestContent() {
    return (
      <Box>
        <Box mb="s16" gap="s16">
          <Box>
            <Text preset="headingMedium">Adicione uma mensagem</Text>
            <Text color="gray2" semiBold>
              Pedido especial, alergias, restrição alimentar ?
            </Text>
          </Box>

          <Text>
            Por favor, adicione a sua mensagem ao pedido para entregarmos um
            pedido melhor ainda. 🙂
          </Text>
        </Box>

        <TextInput
          label="Mensagem"
          placeholder="Digite a sua mensage..."
          value={specialRequestMessage}
          onChangeText={setSpecialRequsetMessage}
          numberOfLines={5}
          textAlignVertical="top"
          multiline
        />

        <Button text="Adicionar" mt="s32" onPress={handleToggleBottomSheet} />
        <Button
          text="Cancelar"
          preset="outline"
          mt="s16"
          onPress={handleToggleBottomSheet}
        />
      </Box>
    );
  }

  function renderAboutDeliveryContent() {
    return (
      <Box>
        <Text>Entrega Expressa</Text>

        <Text>
          Seu pedido chega super-rápido até você, porque a gente sabe que quem
          tem fome tem pressa.
        </Text>

        <Text>Normal</Text>

        <Text>
          O entregador chega em até 1 hora, com todo cuidado e carinho que seu
          pedido merece.
        </Text>
      </Box>
    );
  }

  const handleClickShowBottomSheet = useCallback(
    (optionName: OptionContentBottomSheet) => {
      setOptionContentBottomSheet(optionName);

      handleToggleBottomSheet();
    },
    [setOptionContentBottomSheet, handleToggleBottomSheet],
  );

  return (
    <>
      <Screen
        canGoBack={currentStep === 'MiniCartStep'}
        scrollable={currentStep === 'CheckoutStep'}
        FooterComponent={orderItems.length > 0 && renderFooterComponent()}
        testID="cart-screen">
        <CurretStep
          onToggleStep={handleClickToggleStep}
          onShowBottomSheet={handleClickShowBottomSheet}
        />
      </Screen>

      <BottomSheet ref={bottomSheetRef}>
        {optionContentBottomSheet === 'specialRequest' &&
          renderSpecialRequestContent()}

        {optionContentBottomSheet === 'removeItem' &&
          renderRemoveItemMessageContent()}

        {optionContentBottomSheet === 'aboutDelivery' &&
          renderAboutDeliveryContent()}
      </BottomSheet>
    </>
  );
}
