import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import hero from '../../assets/images/virtual-reality.png';
import Icon from 'react-native-vector-icons/Ionicons';

const SView = styled.View`
  flex: 1;
  background-color: #341470;
`;

const SText = styled.Text`
  color: ${(props: any) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : '20px')};
  font-weight: ${(props: any) =>
    props.fontWeight ? props.fontWeight : 'bold'};
  text-align: center;
  margin-left: 41px;
  margin-right: 23px;
  margin-top: ${(props: any) => (props.marginTop ? props.marginTop : '10px')};
  margin-bottom: ${(props: any) =>
    props.maginBottom ? props.maginBottom : '10px'};
`;

const SOnboardinButton = styled.Pressable`
  width: 30;
  height: 30;
  background-color: #673bb7;
  border-radius: 50;
  justify-content: center;
  align-items: center;
`;

export const Onboarding = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SView>
      <SafeAreaView>
        <Image
          source={hero}
          style={[
            styles.hero,
            {
              width: width * 0.9,
              height: height * 0.35,
              marginVertical: height * 0.15,
              marginHorizontal: width * 0.05,
            },
          ]}
        />
        <SText>
          Descubre el MUNDO de los libros a través de la REALIDAD AUMENTADA
        </SText>

        <SText color="#B2B2B2" fontSize="14px" fontWeight="regular">
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
          <SOnboardinButton>
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
  hero: {
    resizeMode: 'contain',
  },
});
