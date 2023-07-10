import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AboutUsScreen,
  CouponScreen,
  FavoriteScreen,
  LegalScreen,
  ManageAccountScreen,
  NotificationsAccountConfigScreen,
  NotificationScreen,
  PrivacyPolicyScreen,
  ProductScreen,
  SuccessOrderScreen,
  TermsAndConditionsScreen,
} from '@screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';
import {TabNavigationStack} from './TabNavigationStack';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

export function AppStackScreen() {
  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />
      <Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Screen name="NotificationScreen" component={NotificationScreen} />

      <Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Screen name="ProductScreen" component={ProductScreen} />

      <Screen name="SuccessOrderScreen" component={SuccessOrderScreen} />
      <Screen name="CouponScreen" component={CouponScreen} />

      <Screen name="ManageAccountScreen" component={ManageAccountScreen} />
      <Screen
        name="NotificationsAccountConfigScreen"
        component={NotificationsAccountConfigScreen}
      />
      <Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
      />

      <Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Screen name="LegalScreen" component={LegalScreen} />
    </Navigator>
  );
}
