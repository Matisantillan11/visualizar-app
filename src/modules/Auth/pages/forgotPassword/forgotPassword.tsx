import React from 'react';
import {SafeAreaView, Image, useWindowDimensions, View} from 'react-native';
import {SText, STitle} from '@visualizar/common/Text';
import {IForgotPasswordProps} from '@visualizar/modules/Auth/controllers/forgotPassword/forgotPassword.controller';
import {ImageStyle} from '@visualizar/lib/styles/default/image/image.style';
import {colors} from '@visualizar/lib/theme/colors';

// images
import hero from '@visualizar/assets/images/contact-us.png';
import {SCustomInput} from '@visualizar/common/Input/Input';
import {InputStyle} from '@visualizar/lib/styles/default/Input/input.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCustomButton} from '@visualizar/common/Button/Button';
import {EmailInput} from '@visualizar/common/Input/atoms/input.atom';

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
        <EmailInput margin={margin} />
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
