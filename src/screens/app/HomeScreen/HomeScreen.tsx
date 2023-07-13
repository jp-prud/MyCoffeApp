import {useState} from 'react';
import {Image} from 'react-native';

import {
  Screen,
  Text,
  Box,
  TouchableOpacityBox,
  TextInput,
  Icon,
  ProductShelf,
  BottomSheet,
} from '@components';
import {useBottomSheet} from '@hooks';
import {AppTabScreenProps} from '@routes';

import {CelebrationShelf} from './components/CelebrationShelf/CelebrationShelf';
import {SectionWrapper} from './components/SectionWrapper/SectionWrapper';
import {ShippingSelector} from './components/ShippingSelector/ShippingSelector';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [addressIsSelected] = useState(true);

  const {bottomSheetRef, handleToggleBottomSheet} = useBottomSheet();

  function handleClickNavigateToNotificationScreen() {
    navigation.navigate('NotificationScreen');
  }

  function handleClickNavigateToFavoriteScreen() {
    navigation.navigate('FavoriteScreen');
  }

  return (
    <>
      <Screen scrollable>
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          mb="s24">
          <TouchableOpacityBox
            flexDirection="row"
            alignItems="center"
            gap="s8"
            onPress={handleToggleBottomSheet}>
            <Icon name={addressIsSelected ? 'locationFilled' : 'location'} />

            <Box>
              <Text preset="paragraphSmall" bold>
                Brusque - SC
              </Text>
              <Text preset="paragraphSmall" color="gray1">
                R. Santos Dumond
              </Text>
            </Box>
          </TouchableOpacityBox>

          <Box flexDirection="row" gap="s24">
            <TouchableOpacityBox
              hitSlop={4}
              onPress={handleClickNavigateToFavoriteScreen}>
              <Icon name="bookmark" color="grayBlack" />
            </TouchableOpacityBox>

            <TouchableOpacityBox
              hitSlop={4}
              onPress={handleClickNavigateToNotificationScreen}>
              <Icon name="notification" color="grayBlack" />
            </TouchableOpacityBox>
          </Box>
        </Box>

        <Box gap="s16">
          <Text preset="headingMedium">O que você gostaria no seu pedido?</Text>

          <TextInput
            placeholder="Busque por produtos..."
            RightComponent={<Icon name="search" color="gray2" />}
          />
        </Box>

        <Box mt="s24" borderRadius="s16" overflow="hidden">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
              height: 160,
            }}
          />
        </Box>

        <SectionWrapper title="Populares" navigateTo="NotificationScreen">
          <ProductShelf categoryId="1" />
        </SectionWrapper>

        <SectionWrapper title="Nossos Atendimentos" navigateTo="AboutUsScreen">
          <CelebrationShelf />
        </SectionWrapper>
      </Screen>

      <BottomSheet ref={bottomSheetRef}>
        <ShippingSelector />
      </BottomSheet>
    </>
  );
}
