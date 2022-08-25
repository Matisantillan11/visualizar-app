import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../../navigators/AuthNavigator';
import {Login as LoginPage} from '../../pages/login';

export interface ILoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}
export const LoginController = (props: ILoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <LoginPage {...props} email={email} password={password} />;
};
