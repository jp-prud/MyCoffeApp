import {useCallback} from 'react';

import {useAuthContext} from '@context';

import {BottomSheet, Box, Button, Screen, Text} from '@components';
import {useBottomSheet} from '@hooks';
import {AppTabScreenProps} from '@routes';

import {ProfileNavigator} from './components/ProfileNavigator';

export function ProfileScreen({
  navigation,
}: AppTabScreenProps<'ProfileScreen'>) {
  const handleClickNavigate = useCallback(
    (routeScreenName: any) => navigation.navigate(routeScreenName),
    [navigation],
  );

  const {bottomSheetRef, handleToggleBottomSheet} = useBottomSheet();

  const {handleLogout} = useAuthContext();

  return (
    <>
      <Screen scrollable>
        <Text preset="headingMedium">Meu perfil</Text>
        <Box mt="s32" gap="s16">
          <ProfileNavigator icon="heart" title="Salvos" isSibling />
          <ProfileNavigator icon="heart" title="Solicite ajuda" />
        </Box>

        <Box mt="s32" gap="s16">
          <Box mb="s8">
            <Text preset="headingSmall">Configurações da conta</Text>
          </Box>

          <ProfileNavigator
            title="Gerenciar conta"
            subtitle="Atualize as suas informações"
            isSibling
            onPress={() => handleClickNavigate('ManageAccountScreen')}
          />
          <ProfileNavigator
            title="Pagamentos"
            subtitle="Gerencie os métodos de pagamento"
            isSibling
          />
          <ProfileNavigator
            title="Endereços"
            subtitle="Adicione ou remova um endereço"
            isSibling
          />
          <ProfileNavigator
            title="Privacidade"
            subtitle="Conheça sobre as Políticas de Privacidade"
            onPress={() => handleClickNavigate('LegalScreen')}
            isSibling
          />
          <ProfileNavigator
            title="Notificações"
            subtitle="Gerencie nossas notificações"
            isSibling
            onPress={() =>
              handleClickNavigate('NotificationsAccountConfigScreen')
            }
          />
          <ProfileNavigator
            title="Desconectar"
            onPress={handleToggleBottomSheet}
          />
        </Box>

        <Box mt="s32" gap="s16">
          <Box mb="s8">
            <Text preset="headingSmall">Mais Informações</Text>
          </Box>

          <ProfileNavigator
            title="Torne-se um Restaurante Parceiro"
            isSibling
          />

          <ProfileNavigator
            title="Feedback"
            subtitle="Envie um feedback para a nossa equipe de desenvolvimento"
          />
        </Box>
      </Screen>

      <BottomSheet ref={bottomSheetRef}>
        <Box>
          <Text preset="headingMedium">Você tem certeza ?</Text>

          <Button text="Confirmar" mt="s24" onPress={handleLogout} />

          <Button
            text="Cancelar"
            mt="s16"
            preset="outline"
            onPress={handleToggleBottomSheet}
          />
        </Box>
      </BottomSheet>
    </>
  );
}
