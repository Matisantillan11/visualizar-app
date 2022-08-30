import React from 'react';
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  ToastProps,
} from 'react-native-toast-message';
import {colors} from '@visualizar/lib/theme/colors';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: colors.successColor}}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: colors.successColor,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: colors.white,
      }}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: colors.errorColor}}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: colors.errorColor,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: colors.white,
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
      }}
    />
  ),
};
