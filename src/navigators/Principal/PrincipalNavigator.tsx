import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PrincipalStackList} from './types/principal-navigator';
import {Home as HomeScreen} from '@visualizar/modules/Principal/pages/Home/Home';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {colors} from '@visualizar/lib/theme/colors';
import {Pressable, Text} from 'react-native';
import {Header} from '@visualizar/common/Header/Header';
import styled from 'styled-components';
import {CustomBottomTab} from '@visualizar/common/Header/CustomBottomTab';
import {BookScreen} from '@visualizar/modules/Principal/pages/Books/BookScreen';
import {FavoriteScreen} from '@visualizar/modules/Principal/pages/Favorites/Favorite.screen';
const Tab = createBottomTabNavigator<PrincipalStackList>();

export const PrincipalNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomBottomTab {...props} />}
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: colors.darkPurple,
        },
        header: ({route}) => {
          let username = 'Matias Santillan';
          if (route.name !== 'Home') {
            username = route.name;
          }
          return <Header username={username} points="250 Points" />;
        },
      })}>
      <Tab.Screen name="Books" component={BookScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Animations" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};
