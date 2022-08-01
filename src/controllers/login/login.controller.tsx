import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../../navigators/AuthNavigator';
import {Login as LoginPage} from '../../pages/login';

export interface ILoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}
export const LoginController = (props: ILoginProps) => {
  return <LoginPage {...props} />;
};
