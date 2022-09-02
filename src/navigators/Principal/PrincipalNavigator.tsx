import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PrincipalStackList} from './types/principal-navigator';
import {Home as HomeScreen} from '@visualizar/modules/Principal/pages/Home/Home';

export const PrincipalNavigator = () => {
  const Stack = createStackNavigator<PrincipalStackList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
