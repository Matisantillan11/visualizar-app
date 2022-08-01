import React from 'react';
import styled from 'styled-components';
import {StyleSheet, TextInput, View} from 'react-native';
import {IInput} from '../../interfaces/components/Input';
import {colors} from '../../lib/theme/colors';

export const SInput = styled(TextInput)`
  width: 100%;
  font-size: ${(props: IInput) => (props.size ? props.size : '14px')};
  font-weight: ${(props: IInput) => (props.weight ? props.weight : '600')};
  color: ${(props: IInput) => (props.color ? props.color : colors.lightPurple)};
  margin-left: 5px;
  margin-right: ${(props: IInput) => props.marginR && props.marginR};
`;

const SInputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${(props: IInput) => (props.marginT ? props.marginT : '15px')};
  margin-bottom: ${(props: IInput) => (props.marginB ? props.marginB : '15px')};
`;

export const SCustomInput = (props: any) => {
  const {leftIcon, rigthIcon, ...InputStyledProps} = props;
  return (
    <SInputWrapper>
      {leftIcon}
      <SInput {...InputStyledProps} marginR={rigthIcon ? '5px' : '0px'} />
      {rigthIcon}
    </SInputWrapper>
  );
};

const style = StyleSheet.create({});
