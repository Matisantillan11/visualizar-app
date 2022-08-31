import {ReactElement} from 'react';
import {PressableProps} from 'react-native';

export interface IButtonStyle {
  width?: string;
  height?: string;
  radius?: string;
  backgroundColor?: string;
}

export interface IButton extends PressableProps {
  text: string;
  textColor: string;
  textWeight: string;
  textAlign: string;
  textSize: string;
  leftIcon?: ReactElement;
  width?: string;
  height?: string;
  radius?: string;
  backgroundColor?: string;
}
