import {Image} from 'react-native';

import {Box, Screen, Text} from '@components';

export function AboutUsScreen() {
  return (
    <Screen scrollable>
      <Box flexDirection="row" justifyContent="space-between">
        <Text preset="headingSmall">Sassipan Panificadora e Confeitaria</Text>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mt="s16">
        <Box>
          <Text semiBold color="gray1">
            Carlos Graf, 459 - Brusque
          </Text>

          <Text semiBold color="gray1">
            10:00 - 20:00
          </Text>
        </Box>

        <Box
          backgroundColor="greenPrimaryLight"
          paddingHorizontal="s20"
          paddingVertical="s4"
          borderRadius="s8">
          <Text semiBold>Aberto</Text>
        </Box>
      </Box>

      <Box marginVertical="s24">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1469631423273-6995642a6a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80',
            height: 180,
          }}
          style={{borderRadius: 12}}
        />
      </Box>

      <Box gap="s8">
        <Text>
          A casa fundada em 01 de junho de 1986 desenvolveu receitas especiais
          sob forte influência européia, através da cultura trazida pelos
          imigrantes alemães, italianos e poloneses, que chegaram aqui há mais
          de 150 anos.
        </Text>

        <Text>
          Vencedora do Prêmio Baker Top, que premia as 100 melhores padarias do
          Brasil por nove anos. Vencedora na etapa regional da Copa Bunge de
          Panificação, concurso nacional, que visa revelar as melhores receitas
          de pães e doces do país.
        </Text>

        <Text>
          Portadora do Selo Social, que premia as empresas do município
          comprometidas com os objetivos do milênio na perspectiva de tornar o
          mundo um lugar mais justo, solidário e melhor para viver. São prêmios
          que nos estimulam a buscar sempre melhorias.
        </Text>
      </Box>
    </Screen>
  );
}
