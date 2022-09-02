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
    let finalValue: string | null = null;
    try {
      await AsyncStorage.getItem(key).then((collect: string | null) => {
        if (collect !== null) {
          finalValue = collect;
        } else {
          Toast.show({
            type: 'error',
            text1: 'Opsss....something went wrong',
            text2: `Cannot get key ${key}`,
          });
        }
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Opsss....something went wrong',
        text2: `Cannot get key ${key}`,
      });

      console.log({error});
    }
    return finalValue;
  };

  return {store, get};
};
