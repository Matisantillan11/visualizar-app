import {ViewProps} from 'react-native';

export interface ISCard extends ViewProps {
  width: number;
  height: number;
  title?: string;
  author?: string;
  margin?: string;
  horizontal?: boolean;
}
