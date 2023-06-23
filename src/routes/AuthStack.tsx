import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  ForgotPasswordScreen,
} from '@screens';

import {
  AuthStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

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
