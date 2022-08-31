import {InputStyle} from '@visualizar/lib/styles/default/Input/input.style';
import {colors} from '@visualizar/lib/theme/colors';
import {atom, useAtom} from 'jotai';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SCustomInput} from '../Input';

export const emailAtom = atom<string>('');
export const passwordAtom = atom<string>('');

export const EmailInput = (margin: any) => {
  const [emailValue, setEmailValue] = useAtom(emailAtom);

  return (
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
      onChangeText={(value: string) => setEmailValue(value)}
      value={emailValue}
      leftIcon={
        <Icon name="alternate-email" size={15} color={colors.lightGray} />
      }
    />
  );
};

export const PasswordInput = (margin: any) => {
  const [passwordValue, setPasswordValue] = useAtom(passwordAtom);
  return (
    <SCustomInput
      keyboardType="default"
      placeholder="Contrasena"
      marginT={`${margin}px`}
      marginB={`${margin}px`}
      marginL={'5px'}
      placeholderTextColor={colors.lightGray}
      name="password"
      value={passwordValue}
      onChangeText={(value: string) => setPasswordValue(value)}
      style={InputStyle.inputStyle}
      leftIcon={<Icon name="lock" size={15} color={colors.lightGray} />}
      rigthIcon={<Ionicon name="eye" size={15} color={colors.lightGray} />}
    />
  );
};
