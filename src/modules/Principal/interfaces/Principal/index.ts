import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {ReactChildren} from 'react-native-toast-message';

export interface IBannerHome {
  image?: ImageSourcePropType;
  children?: ReactChildren[];
}
