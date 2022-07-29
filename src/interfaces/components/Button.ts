import {ReactElement} from 'react';

export interface IButtonStyle {
  width?: string;
  height?: string;
  radius?: string;
  backgroundColor?: string;
}

export interface IButton extends IButtonStyle {
  text: string;
  textColor: string;
  textWeight: string;
  textAlign: string;
  textSize: string;
  leftIcon?: ReactElement;
}
