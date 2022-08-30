import React from 'react';
import {CheckEmail} from '@visualizar/pages/checkEmail/checkEmail';
import {Linking} from 'react-native';
import Toast from 'react-native-toast-message';

export const CheckEmailController = () => {
  const openEmailApp = async () => {
    try {
      await Linking.openURL('email://app');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Opsss..',
        text2: `Something went wront ❎`,
      });
    }
  };
  return <CheckEmail openEmail={openEmailApp} />;
};
