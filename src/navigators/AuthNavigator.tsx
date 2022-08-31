import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding as OnboardingScreen} from '@visualizar/modules/Auth/pages/onboarding';
import {LoginController as LoginScreen} from '@visualizar/modules/Auth/controllers/login/login.controller';
import {ForgotPasswordController as ForgotScreen} from '@visualizar/modules/Auth/controllers/forgotPassword/forgotPassword.controller';
import {CheckEmailController as CheckEmailPage} from '@visualizar/modules/Auth/controllers/checkEmail/checkEmail.controller';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  CheckEmail: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotScreen} />
      <Stack.Screen name="CheckEmail" component={CheckEmailPage} />
    </Stack.Navigator>
  );
};
