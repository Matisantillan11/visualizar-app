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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 29,
          height: 29,
          backgroundColor:
            isFocused == 'BoxMode' ? colors.mediumPurple : 'transparent',
          borderRadius: 8,
        }}>
        <Icon
          style={{marginHorizontal: 5}}
          name="grid-outline"
          size={20}
          onPress={() => changeViewMode('BoxMode')}
          color={isFocused == 'BoxMode' ? colors.white : colors.darkPurple}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 29,
          height: 29,
          backgroundColor:
            isFocused == 'ListMode' ? colors.mediumPurple : 'transparent',
          borderRadius: 8,
        }}>
        <Icon
          style={{marginHorizontal: 5}}
          name="list-outline"
          size={20}
          onPress={() => changeViewMode('ListMode')}
          color={isFocused == 'ListMode' ? colors.white : colors.darkPurple}
        />
      </View>
    </View>
  );
};
