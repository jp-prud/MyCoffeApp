import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {IconProps} from '@components';

import {RootStackParamList} from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppStackParamList = {
  AppTabNavigator: undefined;
  HomeScreen: undefined;
  NotificationScreen: undefined;
  ProfileScreen: undefined;
  FavoriteScreen: undefined;
  OutletScreen: undefined;
  CouponScreen: undefined;
  AboutUsScreen: undefined;
  SuccessOrderScreen: undefined;
  ProductScreen: {
    productId: string;
  };
  CategoryScreen: {
    categoryId: string;
  };
  ManageAccountScreen: undefined;
  NotificationsAccountConfigScreen: undefined;
  PrivacyPolicyScreen: undefined;
  TermsAndConditionsScreen: undefined;
  LegalScreen: undefined;
  FeedbackDeveloperScreen: undefined;
};

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

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  OutletScreen: undefined;
  ProfileScreen: undefined;
};

export type AppScreenProps<RouteScreenName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteScreenName>;

export type AuthScreenProps<RouteScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteScreenName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabNavigatorParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabNavigatorParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;

export const NAVIGATOR_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  fullScreenGestureEnabled: true,
  navigationBarHidden: true,
};
