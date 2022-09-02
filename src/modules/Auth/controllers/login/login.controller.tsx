import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useMemo, useState} from 'react';
import {RootStackParamList} from '@visualizar/navigators/AuthNavigator';
import {Login as LoginPage} from '@visualizar/modules/Auth/pages/login';
import {useAtom, useAtomValue} from 'jotai';
import {
  emailAtom,
  passwordAtom,
} from '@visualizar/common/Input/atoms/input.atom';
import {apiVisualizarInstance} from '@visualizar/utils/api.config';
import {API_URL} from '@visualizar/constants/apiUrl';
import {useAuthenticateMutation} from './atoms/authenticate.atom';
import {ActivityIndicator} from 'react-native';
export interface ILoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}

export const LoginController = (props: ILoginProps) => {
  const email = useAtomValue(emailAtom);
  const password = useAtomValue(passwordAtom);
  const {authenticate} = useAuthenticateMutation();

  const onAuthenticate = async () => {
    if (email !== '' && password !== '') {
      await authenticate.mutate({email, password});
    }
  };

  const isAuthenticated: boolean = useMemo(() => {
    if (!authenticate.isLoading && authenticate.isSuccess) {
      props.navigation.navigate('PrincipalStack');
      return true;
    }

    return false;
  }, [authenticate]);

  return (
    <LoginPage
      {...props}
      authenticate={onAuthenticate}
      isAuthenticated={isAuthenticated}
      isLoading={authenticate.isLoading}
    />
  );
};
