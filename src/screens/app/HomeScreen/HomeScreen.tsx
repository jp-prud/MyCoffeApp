import {useState} from 'react';
import {Pressable, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  Screen,
  Text,
  Box,
  TouchableOpacityBox,
  TextInput,
  Icon,
} from '@components';
import {RootStackParamList} from '@routes';

import {CategoryBar} from './components/CategoryBar/CategoryBar';
import {SectionWrapper} from './components/SectionWrapper/SectionWrapper';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: ScreenProps) {
  const [addressIsSelected] = useState(true);

  function handleClickNavigateToNotificationScreen() {
    navigation.navigate('NotificationScreen');
  }

  function handleClickNavigateToFavoriteScreen() {
    navigation.navigate('FavoriteScreen');
  }

  const navigate = useNavigation();

  return (
    <Screen scrollable>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        mb="s24">
        <TouchableOpacityBox flexDirection="row" alignItems="center" gap="s8">
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

      <Box>
        <Text preset="headingMedium">O que você gostaria no seu pedido?</Text>

        <TextInput
          placeholder="Busque por produtos..."
          RightComponent={<Icon name="search" color="gray2" />}
        />
      </Box>

      <Box
        mt="s24"
        height={140}
        borderRadius="s16"
        backgroundColor="grayBlack"
      />

      <SectionWrapper title="Populares" navigateTo="NotificationScreen">
        <CategoryBar />

        <Box flexDirection="row" gap="s16" mt="s24">
          <ScrollView
            horizontal
            contentContainerStyle={{gap: 16, paddingBottom: 2}}>
            {['1', '2'].map(item => (
              <Pressable
                key={item}
                onPress={() =>
                  navigate.navigate('ProductScreen', {
                    productId: item,
                  })
                }>
                <Box
                  width={154}
                  borderRadius="s16"
                  overflow="hidden"
                  elevation={1}>
                  <Box
                    width={154}
                    height={152}
                    backgroundColor="grayBlack"
                    borderRadius="s12"
                  />
                  <Box p="s12" gap="s8">
                    <Text preset="paragraphSmall">Ice Cappuccino {item}</Text>

                    <Text preset="paragraphSmall" bold>
                      R$ 5.00
                    </Text>
                  </Box>
                </Box>
              </Pressable>
            ))}
          </ScrollView>
        </Box>
      </SectionWrapper>

      <SectionWrapper title="Nossos eventos" navigateTo="AboutUsScreen">
        <Box flexDirection="row" gap="s16">
          <ScrollView
            horizontal
            contentContainerStyle={{gap: 16, paddingBottom: 2}}>
            {['', '1'].map(item => (
              <Box
                key={item}
                width={266}
                borderRadius="s16"
                overflow="hidden"
                elevation={1}>
                <Box width={266} height={152} backgroundColor="grayBlack" />
                <Box p="s12" gap="s8">
                  <Text preset="paragraphSmall">Ice Cappuccino</Text>

                  <Text preset="paragraphSmall" bold>
                    R$ 5.00
                  </Text>
                </Box>
              </Box>
            ))}
          </ScrollView>
        </Box>
      </SectionWrapper>
    </Screen>
  );
}
