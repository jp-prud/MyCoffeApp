import {useCallback, useMemo, useState} from 'react';

import {delay} from '@utils';

import {BottomSheet, Box, Screen, Text} from '@components';
import {useBottomSheet} from '@hooks';
import {AppScreenProps} from '@routes';

import {ProfileNavigator} from '../ProfileScreen/components/ProfileNavigator';

type SelectedOptionsMapped =
  | 'order'
  | 'store'
  | 'recommendation'
  | 'reminder'
  | 'newProduct';

export function NotificationsAccountConfigScreen({}: AppScreenProps<'NotificationsAccountConfigScreen'>) {
  const [selectedOption, setSelectedOption] =
    useState<SelectedOptionsMapped>('order');

  const {bottomSheetRef, handleToggleBottomSheet} = useBottomSheet();

  const SelectedOptionComponent = useMemo(() => {
    switch (selectedOption) {
      case 'order':
        return <Text preset="headingMedium">order</Text>;
      case 'store':
        return <Text preset="headingMedium">store</Text>;
      case 'recommendation':
        return <Text preset="headingMedium">recommendation</Text>;
      case 'reminder':
        return <Text preset="headingMedium">reminder</Text>;
      case 'newProduct':
        return <Text preset="headingMedium">newProduct</Text>;
      default:
        return <Text>order</Text>;
    }
  }, [selectedOption]);

  const handleClickSelectedOption = useCallback(
    async (optionName: SelectedOptionsMapped) => {
      setSelectedOption(optionName);

      await delay(100);

      handleToggleBottomSheet();
    },
    [handleToggleBottomSheet],
  );

  return (
    <>
      <Screen canGoBack>
        <Text preset="headingMedium">Notificações</Text>

        <Box mt="s32" gap="s16">
          <ProfileNavigator
            title="Atualização de pedidos"
            subtitle="On: Push; Off: SMS"
            onPress={() => handleClickSelectedOption('order')}
            isSibling
          />

          <ProfileNavigator
            title="Ofertas da loja"
            subtitle="On: Push"
            onPress={() => handleClickSelectedOption('store')}
            isSibling
          />

          <ProfileNavigator
            title="Recomendações"
            subtitle="On: Push"
            onPress={() => handleClickSelectedOption('recommendation')}
            isSibling
          />

          <ProfileNavigator
            title="Lembretes"
            subtitle="On: Push"
            onPress={() => handleClickSelectedOption('reminder')}
            isSibling
          />

          <ProfileNavigator
            title="Novos produtos e atualizações"
            onPress={() => handleClickSelectedOption('newProduct')}
            subtitle="On: Push"
          />
        </Box>
      </Screen>

      <BottomSheet ref={bottomSheetRef}>{SelectedOptionComponent}</BottomSheet>
    </>
  );
}
