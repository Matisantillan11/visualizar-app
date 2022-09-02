import React, {Fragment, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding as OnboardingScreen} from '@visualizar/modules/Auth/pages/onboarding';
import {LoginController as LoginScreen} from '@visualizar/modules/Auth/controllers/login/login.controller';
import {ForgotPasswordController as ForgotScreen} from '@visualizar/modules/Auth/controllers/forgotPassword/forgotPassword.controller';
import {CheckEmailController as CheckEmailPage} from '@visualizar/modules/Auth/controllers/checkEmail/checkEmail.controller';
import {PrincipalNavigator} from './Principal/PrincipalNavigator';
import {useStorage} from '@visualizar/lib/storage';
import {StoredKeys} from '@visualizar/constants/storedKeys';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  CheckEmail: undefined;
  PrincipalStack: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const storage = useStorage();
  const [token, setToken] = useState(null);
  const getToken = (callback: any) => {
    storage.get(StoredKeys.token).then(value => {
      if (value !== null) {
        callback(value);
        return value;
      }
      return null;
    });
  };

  useEffect(() => {
    getToken(setToken);
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token !== undefined && token !== null ? (
        <Fragment>
          <Stack.Screen name="PrincipalStack" component={PrincipalNavigator} />
        </Fragment>
      ) : (
        <Fragment>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotScreen} />
          <Stack.Screen name="CheckEmail" component={CheckEmailPage} />
          <Stack.Screen name="PrincipalStack" component={PrincipalNavigator} />
        </Fragment>
      )}
    </Stack.Navigator>
  );
};
