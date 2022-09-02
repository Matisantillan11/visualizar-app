import {API_URL} from '@visualizar/constants/apiUrl';
import {apiVisualizarInstance} from '@visualizar/utils/api.config';
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  IAuthenticateRequest,
  IAuthenticationResponse,
} from '../interfaces/Auth.interface';
import {AxiosError, AxiosResponse} from 'axios';
import Toast from 'react-native-toast-message';
import {ServerStatus} from '@visualizar/constants/serverStatus';
import {useStorage} from '@visualizar/lib/storage';
import {StoredKeys} from '@visualizar/constants/storedKeys';

export const useAuthenticateMutation = () => {
  const storage = useStorage();
  //const queryClient = useQueryClient();

  const authenticate = useMutation(
    async (payload: IAuthenticateRequest) => {
      const {email, password} = payload;
      return await apiVisualizarInstance.post(API_URL.AUTH.LOGIN, {
        email,
        password,
      });
    },
    {
      onSuccess: (response: AxiosResponse) => {
        const {data, status} = response;
        if (
          status === ServerStatus.BAD_REQUEST ||
          status === ServerStatus.INTERNAL_SERVER_ERROR ||
          status === ServerStatus.NOT_FOUND
        ) {
          Toast.show({
            type: 'error',
            text1: 'Opsss... something went wrong',
            text2: 'We cannot validate your identity',
          });
        }

        if (data !== null) {
          storage.store(StoredKeys.token, data?.token);
          return data;
        }

        Toast.show({
          type: 'error',
          text1: 'Opsss... something went wrong',
          text2: 'We cannot validate your identity',
        });
      },
      onError: (error: AxiosError) => {
        Toast.show({
          type: 'error',
          text1: 'Opsss... something went wrong',
          text2: 'We cannot validate your identity',
        });
        console.log({error: error.message});
      },
    },
  );

  return {authenticate};
};
