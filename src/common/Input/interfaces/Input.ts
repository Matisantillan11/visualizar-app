import {TextInputProps} from 'react-native';

export interface IInput extends TextInputProps {
  margin?: number;
  color?: string;
  size?: string;
  weight?: string;
  lineSize?: string;
  lineColor?: string;
  marginT?: string;
  marginB?: string;
  marginL?: string;
  marginR?: string;
}
