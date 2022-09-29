import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {ITag, ITagContainer} from './interfaces/Tag.interface';

const STagContainer = styled(View)<ITagContainer>`
  min-width: 65px;
  height: auto;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: ${({color}: ITagContainer) => color};
`;

const STagText = styled(Text)`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${colors.white};
`;

export const Tag = ({text, color}: ITag) => {
  return (
    <STagContainer color={color}>
      <STagText>{text}</STagText>
    </STagContainer>
  );
};
