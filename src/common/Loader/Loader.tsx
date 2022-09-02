import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '@visualizar/lib/theme/colors';
export const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={colors.darkPurple} />
    </View>
  );
};
