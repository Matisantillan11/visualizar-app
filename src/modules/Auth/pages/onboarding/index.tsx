import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styled from 'styled-components';
import hero from '@visualizar/assets/images/virtual-reality.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {ImageStyle} from '@visualizar/lib/styles/default/image/image.style';
import {SText} from '@visualizar/common/Text';
import SplashScreen from 'react-native-splash-screen';
import {RootStackParamList} from '@visualizar/navigators/AuthNavigator';

const SView = styled(View)`
  flex: 1;
  background-color: #341470;
`;

const SOnboardinButton = styled(Pressable)`
  width: 30px;
  height: 30px;
  background-color: #673bb7;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

interface Props extends StackScreenProps<RootStackParamList, 'Onboarding'> {}
export const Onboarding = ({navigation}: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const {width, height} = useWindowDimensions();

  return (
    <SView>
      <SafeAreaView>
        <Image
          source={hero}
          style={[
            ImageStyle.hero,
            {
              width: width * 0.9,
              height: height * 0.35,
              marginVertical: height * 0.1,
              marginHorizontal: width * 0.05,
            },
          ]}
        />
        <SText>
          Descubre el MUNDO de los libros a través de la REALIDAD AUMENTADA
        </SText>

        <SText color="#B2B2B2" size="14px" weight="500">
          Leer no tiene porque ser aburrido. Con la REALIDAD AUMENTADA ahora
          podes divertirte y aprender al mismo tiempo. Unite!
        </SText>
        <View
          style={[
            styles.ExternalButton,
            {
              marginHorizontal: width - width * 0.55,
              marginTop: 18,
            },
          ]}>
          <SOnboardinButton onPress={() => navigation.navigate('Login')}>
            <Icon name="chevron-forward-outline" size={20} color={'#ffffff'} />
          </SOnboardinButton>
        </View>
      </SafeAreaView>
    </SView>
  );
};

const styles = StyleSheet.create({
  ExternalButton: {
    width: 45,
    height: 45,
    borderColor: '#673BB7',
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
