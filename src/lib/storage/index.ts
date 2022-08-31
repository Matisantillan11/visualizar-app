import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const useStorage = () => {
  const store = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Opsss....something went wrong',
        text2: `Cannot set key ${key}`,
      });
    }
  };

  const get = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value == undefined || value == null) {
        Toast.show({
          type: 'error',
          text1: 'Opsss....something went wrong',
          text2: `Cannot get key ${key}`,
        });

        return 1;
      }
      return value;
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Opsss....something went wrong',
        text2: `Cannot get key ${key}`,
      });
    }
  };

  return {store, get};
};
