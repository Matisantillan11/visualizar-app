import React from 'react';
import styled from 'styled-components';
import {Pressable} from 'react-native';
import {colors} from '@visualizar/lib/theme/colors';
import {IButton, IButtonStyle} from '@visualizar/interfaces/components/Button';
import {SText} from '@visualizar/components/Text';

const SButton = styled(Pressable)`
  background-color: ${(props: IButtonStyle) =>
    props.backgroundColor ? props.backgroundColor : colors.darkPurple};
  border-radius: ${(props: IButtonStyle) =>
    props.radius ? props.radius : '12px'};
  height: ${(props: IButtonStyle) => (props.height ? props.height : '37px')};
  width: ${(props: IButtonStyle) => (props.width ? props.width : '255px')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

export const SCustomButton = (props: IButton) => {
  const {
    text,
    textAlign,
    textColor,
    textWeight,
    textSize,
    leftIcon,
    ...ButtonStyleProps
  } = props;
  return (
    <SButton {...ButtonStyleProps}>
      {leftIcon}
      <SText
        size={textSize}
        color={textColor}
        weight={textWeight}
        align={textAlign}>
        {text}
      </SText>
    </SButton>
  );
};
