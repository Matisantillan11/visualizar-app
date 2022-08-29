import {Text} from 'react-native';
import styled from 'styled-components';
import {IText, ITitle} from '@visualizar/components/Text/interfaces/Text';
import {colors} from '@visualizar/lib/theme/colors';

export const STitle = styled(Text)`
  font-size: ${(props: ITitle) => (props.size ? props.size : '24px')};
  font-weight: bold;
  color: ${(props: ITitle) => (props.color ? props.color : colors.black)};
`;

export const SText = styled(Text)`
  color: ${(props: IText) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props: IText) => (props.size ? props.size : '20px')};
  font-weight: ${(props: IText) => (props.weight ? props.weight : 'bold')};
  text-align: center;
  margin-left: ${(props: IText) => (props.marginL ? props.marginL : '41px')};
  margin-right: ${(props: IText) => (props.marginR ? props.marginR : '23px')};
  margin-top: ${(props: IText) => (props.marginT ? props.marginT : '10px')};
  margin-bottom: ${(props: IText) => (props.marginB ? props.marginB : '10px')};
  text-align: ${(props: IText) => (props.align ? props.align : 'center')};
`;
