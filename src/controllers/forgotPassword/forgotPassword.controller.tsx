import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../../navigators/AuthNavigator';
import {ForgotPassword as ForgotPasswordPage} from '../../pages/forgotPassword/forgotPassword';

export interface IForgotPasswordProps
  extends StackScreenProps<RootStackParamList, 'ForgotPassword'> {}
export const ForgotPasswordController = (props: IForgotPasswordProps) => {
  return <ForgotPasswordPage {...props} />;
};
