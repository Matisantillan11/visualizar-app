import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {colors} from '@visualizar/lib/theme/colors';
import EmailIcon from '@visualizar/assets/images/email-icon.png';
import {SText, STitle} from '@visualizar/components/Text';
import {SCustomButton} from '@visualizar/components/Button/Button';
export const CheckEmail = ({openEmail}: any) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <View style={[styles.container, {height: height * 0.6}]}>
        <View
          style={[
            styles.logoContainer,
            {
              width: width * 0.5,
              height: height * 0.5,
            },
          ]}>
          <Image source={EmailIcon} style={{width: 80, height: 80}} />
        </View>

        <STitle>Chequea tu email</STitle>

        <SText size="14px" color={colors.black} weight="300" marginT="15px">
          Te enviamos instrucciones a tu correo para recuperar tu contraseña
        </SText>
      </View>
      <View style={{height: height * 0.25}}>
        <SCustomButton
          text="Abrir correo"
          onPress={openEmail}
          textAlign="center"
          textColor={colors.white}
          textSize="14px"
          textWeight="700"
        />
        <SText size="14px" color={colors.black} weight="300" marginT="10px">
          Continuar, lo hare luego.
        </SText>
      </View>

      <SText size="12px" color={colors.black} weight="700">
        ¿No recibiste un correo? Asegurate de chequear tu spam o{' '}
        <SText size="12px" color={colors.darkPurple} weight="700">
          solicita nuevas instruccines
        </SText>
      </SText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    maxWidth: 125,
    maxHeight: 125,
    borderRadius: 33.7,
    backgroundColor: colors.mediumPurple10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
