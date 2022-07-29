import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SText, STitle} from '../../components/Text';
import {SCustomInput} from '../../components/Input/Input';
import {colors} from '../../lib/theme/colors';

//styles
import {ImageStyle} from '../../lib/styles/default/image/image.style';
import {InputStyle} from '../../lib/styles/default/Input/input.style';

//Images
import Hero from '../../assets/images/secure-login.png';
import {SCustomButton} from '../../components/Button/Button';

export const Login = () => {
  const {width, height} = useWindowDimensions();
  const margin = width * 0.03;
  return (
    <SafeAreaView>
      <Image
        source={Hero}
        style={[
          ImageStyle.hero,
          {
            width,
            height: height * 0.28,
            marginTop: height * 0.025,
            marginHorizontal: 'auto',
          },
        ]}
      />

      <View style={{paddingHorizontal: width * 0.1}}>
        <STitle>Hola!</STitle>
        <STitle>Inicia sesión</STitle>
      </View>
      {/* Inputs wrapper */}
      <View
        style={{
          paddingLeft: width * 0.15,
          paddingRight: width * 0.15,
          marginVertical: height * 0.025,
          justifyContent: 'flex-end',
        }}>
        <SCustomInput
          keyboardType="email-address"
          placeholder="Correo electronico"
          marginT={`${margin}px`}
          marginB={`${margin}px`}
          marginL={'0px'}
          placeholderTextColor={colors.lightGray}
          style={InputStyle.inputStyle}
          leftIcon={
            <Icon name="alternate-email" size={15} color={colors.lightGray} />
          }
        />
        <SCustomInput
          keyboardType="default"
          placeholder="Contrasena"
          marginT={`${margin}px`}
          marginB={`${margin}px`}
          marginL={'0px'}
          placeholderTextColor={colors.lightGray}
          style={InputStyle.inputStyle}
          leftIcon={<Icon name="lock" size={15} color={colors.lightGray} />}
          rigthIcon={<Ionicon name="eye" size={15} color={colors.lightGray} />}
        />
        <Pressable>
          <SText
            align="right"
            size="14px"
            marginL="0px"
            color={colors.mediumPurple}
            weight="700">
            Olvidaste tu contrasena?
          </SText>
        </Pressable>
      </View>

      <View
        style={{
          paddingLeft: width * 0.15,
          paddingRight: width * 0.15,
          marginVertical: height * 0.025,
          justifyContent: 'center',
        }}>
        <SCustomButton
          text="Iniciar sesion"
          textAlign="center"
          textColor={colors.white}
          textWeight="700"
          textSize="14px"
        />
        <SCustomButton
          backgroundColor={colors.darkWhite}
          leftIcon={
            <Ionicon name="logo-google" size={20} color={colors.black} />
          }
          text="Ingresar con google"
          textAlign="center"
          textColor={colors.lightPurple}
          textWeight="700"
          textSize="14px"
        />

        <SText color={colors.black} weight="400" size="14px">
          Aun no tienes cuenta?
          <SText weight="bold" size="14px" color={colors.mediumPurple}>
            {' '}
            Registrate
          </SText>
        </SText>
      </View>
    </SafeAreaView>
  );
};
