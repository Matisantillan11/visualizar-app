import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ViewBox = ({isFocused, changeViewMode}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        style={{marginHorizontal: 5}}
        name="grid-outline"
        size={20}
        onPress={() => changeViewMode('BoxMode')}
        color={isFocused == 'BoxMode' ? colors.mediumPurple : colors.gray}
      />
      <Icon
        style={{marginHorizontal: 5}}
        name="list-outline"
        size={20}
        onPress={() => changeViewMode('ListMode')}
        color={isFocused == 'ListMode' ? colors.mediumPurple : colors.gray}
      />
    </View>
  );
};
