import {NavigationContainer} from '@react-navigation/native';

import {IconProps} from '../components/Icon/Icon';

import {AuthStackScreen} from './StackNavigation.routes';
import {TabNavigationStack} from './TabNavigationStack.routes';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

export type AppStackParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
  ProfileScreen: undefined;
  FavoriteScreen: undefined;
  CartScreen: undefined;
  OutletScreen: undefined;
  AboutUsScreen: undefined;
  ProductScreen: {
    productId: string;
  };
};

export type TabStackScreenList = {
  HomeStack: undefined;
  ProfileStack: undefined;
  CartStack: undefined;
  OutletStack: undefined;
};

export type RootStackParamList = AuthStackParamList & AppStackParamList;

export function Router() {
  const isAuthenticated = true;

  const ContainerStackRouter = isAuthenticated
    ? TabNavigationStack
    : AuthStackScreen;

  return <NavigationContainer>{ContainerStackRouter()}</NavigationContainer>;
}
