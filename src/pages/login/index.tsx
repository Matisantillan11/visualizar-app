import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {SText, STitle} from '@visualizar/components/Text';
import {SCustomInput} from '@visualizar/components/Input/Input';
import {SCustomButton} from '@visualizar/components/Button/Button';
import {colors} from '@visualizar/lib/theme/colors';

//styles
import {ImageStyle} from '@visualizar/lib/styles/default/image/image.style';
import {InputStyle} from '@visualizar/lib/styles/default/Input/input.style';

//Images
import Hero from '@visualizar/assets/images/secure-login.png';

//props
import {ILoginProps} from '@visualizar/controllers/login/login.controller';

export interface ILoginComponentProps extends ILoginProps {
  email: string;
  password: string;
  setEmail?: (prevState: string) => string;
}
export const Login = ({navigation, email}: ILoginComponentProps) => {
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
          marginL={'5px'}
          placeholderTextColor={colors.lightGray}
          style={InputStyle.inputStyle}
          name="email"
          marginR="25px"
          leftIcon={
            <Icon name="alternate-email" size={15} color={colors.lightGray} />
          }
        />
        <SCustomInput
          keyboardType="default"
          placeholder="Contrasena"
          marginT={`${margin}px`}
          marginB={`${margin}px`}
          marginL={'5px'}
          placeholderTextColor={colors.lightGray}
          name="password"
          style={InputStyle.inputStyle}
          leftIcon={<Icon name="lock" size={15} color={colors.lightGray} />}
          rigthIcon={<Ionicon name="eye" size={15} color={colors.lightGray} />}
        />
        <Pressable>
          <SText
            onPress={() => navigation.navigate('ForgotPassword')}
            align="right"
            size="14px"
            marginR="0px"
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
