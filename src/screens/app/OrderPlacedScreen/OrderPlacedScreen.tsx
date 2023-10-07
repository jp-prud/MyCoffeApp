import {useEffect} from 'react';
import {
  StyleProp,
  ViewStyle,
  Dimensions,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

import {Box, TouchableOpacityBox, Screen, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
import {$shadowProps} from '@theme';

const {width, height} = Dimensions.get('screen');

export function OrderPlacedScreen({
  navigation,
}: AppScreenProps<'OrderPlacedScreen'>) {
  const {bottom} = useAppSafeArea();

  async function handleRequestMapPermission() {
    if (Platform.OS !== 'android') {
      return;
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyCoffeApp',
          message:
            'MyCoffeeApp precisa acessar a sua localização ' +
            'para calcular as informações do pedido.',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Permitir',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    (async () => {
      await handleRequestMapPermission();
    })();
  }, []);

  return (
    <Screen style={$screen}>
      <MapView
        onMapReady={() => {
          handleRequestMapPermission();
        }}
        style={{width, height}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        loadingEnabled={true}
        minZoomLevel={17}
      />

      <View style={[{bottom}, $animatedView, $shadowProps]}>
        <Box>
          <Box>
            <Text preset="paragraphLarge" bold>
              Pedido realizado!
            </Text>
            <Text mt="s8" preset="paragraphSmall" color="gray2">
              Entrega prevista para 11:50 - 12:00
            </Text>
          </Box>

          <Box height={40} backgroundColor="brown" marginVertical="s14" />

          <Text preset="paragraphSmall" color="gray2">
            Seu pedido já foi confirmado e esta sendo preparado pela nossa
            equipe!
          </Text>
        </Box>

        <TouchableOpacityBox
          borderTopColor="gray4"
          borderTopWidth={1}
          pt="s12"
          mt="s16"
          onPress={() =>
            navigation.navigate('OrderDetailsScreen', {
              orderId: '123456789',
            })
          }>
          <Text textAlign="center" preset="paragraphSmall" semiBold>
            Visualizar todos os detalhes
          </Text>
        </TouchableOpacityBox>
      </View>
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};

const $animatedView: StyleProp<ViewStyle> = {
  position: 'absolute',
  left: 24,
  right: 24,
  padding: 16,
  borderRadius: 16,
  backgroundColor: 'white',
  justifyContent: 'space-between',
};
