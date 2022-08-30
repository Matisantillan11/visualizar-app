/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AuthNavigator} from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {toastConfig} from '@visualizar/utils/toast.config';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
