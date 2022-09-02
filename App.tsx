/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {AuthNavigator} from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {toastConfig} from '@visualizar/utils/toast.config';
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {Provider} from 'jotai';
import {ActivityIndicator} from 'react-native';
import {Loader} from '@visualizar/common/Loader/Loader';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Suspense fallback={<Loader />}>
          <NavigationContainer>
            <AuthNavigator />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
