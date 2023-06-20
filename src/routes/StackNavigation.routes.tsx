import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {AboutUsScreen} from '../screens/app/AboutUsScreen/AboutUsScreen';
import {CartScreen} from '../screens/app/CartScreen/CartScreen';
import {FavoriteScreen} from '../screens/app/FavoriteScreen/FavoriteScreen';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';
import {NotificationScreen} from '../screens/app/NotificationScreen/NotificationScreen';
import {OutletScreen} from '../screens/app/OutletScreen/OutletScreen';
import {ProductScreen} from '../screens/app/ProductScreen/ProductScreen';
import {ProfileScreen} from '../screens/app/ProfileScreen/ProfileScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';

import {RootStackParamList} from './Routes';

const NAVIGATOR_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  fullScreenGestureEnabled: true,
  navigationBarHidden: true,
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export function HomeStackScreen() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Screen name="NotificationScreen" component={NotificationScreen} />

      <Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Screen name="ProductScreen" component={ProductScreen} />
    </Navigator>
  );
}

export function ProfileStackScreen() {
  return (
    <Navigator
      initialRouteName="ProfileScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
}

export function CartStackScreen() {
  return (
    <Navigator
      initialRouteName="CartScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="CartScreen" component={CartScreen} />
    </Navigator>
  );
}

export function OutletStackScreen() {
  return (
    <Navigator
      initialRouteName="OutletScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="OutletScreen" component={OutletScreen} />
    </Navigator>
  );
}

export function AuthStackScreen() {
  return (
    <Navigator
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}
      initialRouteName="LoginScreen">
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Navigator>
  );
}
