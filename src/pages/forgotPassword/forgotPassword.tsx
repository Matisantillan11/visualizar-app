import React from 'react';
import {SafeAreaView, Image, useWindowDimensions, View} from 'react-native';
import {SText, STitle} from '@visualizar/components/Text';
import {IForgotPasswordProps} from '@visualizar/controllers/forgotPassword/forgotPassword.controller';
import {ImageStyle} from '@visualizar/lib/styles/default/image/image.style';
import {colors} from '@visualizar/lib/theme/colors';

// images
import hero from '@visualizar/assets/images/contact-us.png';
import {SCustomInput} from '@visualizar/components/Input/Input';
import {InputStyle} from '@visualizar/lib/styles/default/Input/input.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCustomButton} from '@visualizar/components/Button/Button';

export const ForgotPassword = ({navigation}: IForgotPasswordProps) => {
  const {width, height} = useWindowDimensions();
  const margin = width * 0.03;
  return (
    <SafeAreaView>
      <Image
        source={hero}
        style={[
          ImageStyle.hero,
          {
            width: width * 0.9,
            height: height * 0.35,
            marginBottom: height * 0.05,
            marginHorizontal: width * 0.05,
          },
        ]}
      />

      <View style={{paddingHorizontal: width * 0.1}}>
        <STitle>¿Olvidaste </STitle>
        <STitle>tu contraseña?</STitle>
        <SText
          align="left"
          marginL="0px"
          marginR="10px"
          color={colors.black}
          size="14px"
          weight="200">
          No te preocupes. Decinos tu correo electrónico y te ayudaremos a
          recuperar tu contraseña.
        </SText>
      </View>

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
        <SCustomButton
          text="Continuar"
          textAlign="center"
          textColor={colors.white}
          textWeight="700"
          textSize="14px"
          onPress={() => navigation.navigate('CheckEmail')}
        />
      </View>
    </SafeAreaView>
  );
};
