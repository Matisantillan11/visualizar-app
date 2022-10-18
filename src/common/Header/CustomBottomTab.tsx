import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import HomeSharp from '@visualizar/assets/images/home-sharp.png';

const SHomeButton = styled(Pressable)`
  width: 35px;
  height: 35px;
  background-color: rgba(137, 100, 244, 0.45);
  border-radius: 50;
  justify-content: center;
  align-items: center;
  //margin: 0 15px;
  /* position: absolute;
  top: -50%;
  left: 40%;
  translate: -50%; */
`;

const STab = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-width: 1px;
  border-top-color: ${colors.lightGray};
`;

export const CustomBottomTab = (props: BottomTabBarProps) => {
  const {navigation, state} = props;
  const {routes} = state;
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView>
      <STab style={{width, height: height * 0.06}}>
        {routes.map(route => {
          let iconName: string = '';

          switch (route.name) {
            case 'Books':
              iconName = 'book';
              break;
            case 'Fill':
              iconName = 'book';
              break;
            case 'Animations':
              iconName = 'camera';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          if (route.name === 'Home') {
            return (
              <SHomeButton
                onPress={() => {
                  navigation.navigate(route.name);
                }}>
                <Image source={HomeSharp} style={{width: 25, height: 25}} />
              </SHomeButton>
            );
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                width: 45,
                height: 35,
              }}>
              <Icon name={iconName} size={25} color={colors.darkPurple} />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                }}>
                {route.name}
              </Text>
            </View>
          );
        })}
      </STab>
    </SafeAreaView>
  );
};
