import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PrincipalStackList} from './types/principal-navigator';
import {Home as HomeScreen} from '@visualizar/modules/Principal/pages/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@visualizar/lib/theme/colors';
import {Text} from 'react-native';
import {Header} from '@visualizar/common/Header/Header';
const Tab = createBottomTabNavigator<PrincipalStackList>();
export const PrincipalNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Books':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Animations':
              iconName = focused ? 'camera' : 'camera-outline';
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={colors.darkPurple} />;
        },

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Books" component={HomeScreen} />
      <Tab.Screen name="Animations" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};
