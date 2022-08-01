import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding as OnboardingScreen} from '../pages/onboarding';
import {LoginController as LoginScreen} from '../controllers/login/login.controller';
import {ForgotPasswordController as ForgotScreen} from '../controllers/forgotPassword/forgotPassword.controller';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotScreen} />
    </Stack.Navigator>
  );
};
