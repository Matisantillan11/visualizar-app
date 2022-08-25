import React from 'react';
import styled from 'styled-components';
import {StyleSheet, TextInput, View} from 'react-native';
import {IInput} from '@visualizar/interfaces/components/Input';
import {colors} from '@visualizar/lib/theme/colors';

export const SInput = styled(TextInput)`
  width: 100%;
  font-size: ${(props: IInput) => (props.size ? props.size : '14px')};
  font-weight: ${(props: IInput) => (props.weight ? props.weight : '600')};
  color: ${(props: IInput) => (props.color ? props.color : colors.lightPurple)};
  margin-left: ${(props: IInput) => (props.marginL ? props.marginL : '15px')};
  margin-right: ${(props: IInput) => (props.marginR ? props.marginR : '15px')};
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
      <SInput {...InputStyledProps} />
      {rigthIcon}
    </SInputWrapper>
  );
};

const style = StyleSheet.create({});
