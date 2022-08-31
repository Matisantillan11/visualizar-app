import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {RootStackParamList} from '@visualizar/navigators/AuthNavigator';
import {Login as LoginPage} from '@visualizar/modules/Auth/pages/login';
import {useAtom, useAtomValue} from 'jotai';
import {
  emailAtom,
  passwordAtom,
} from '@visualizar/common/Input/atoms/input.atom';
export interface ILoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}

export const LoginController = (props: ILoginProps) => {
  const email = useAtomValue(emailAtom);
  const password = useAtomValue(passwordAtom);

  console.log({email});
  console.log({password});

  return <LoginPage {...props} />;
};
