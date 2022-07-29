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
import React, {type PropsWithChildren} from 'react';
import {AuthNavigator} from './src/navigators/AuthNavigator';
import {Onboarding} from './src/pages/onboarding';
import {NavigationContainer, StackActions} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
