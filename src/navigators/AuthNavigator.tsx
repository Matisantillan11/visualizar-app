import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding as OnboardingScreen} from '../pages/onboarding';
import {Login as LoginScreen} from '../pages/login';
export const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
