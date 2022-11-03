import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import styled from 'styled-components';
import {STitle} from '../Text';
import {ISCard} from './interfaces/Card.interface';

const SCard = styled(View)<ISCard>`
  width: ${({width}: ISCard) => width};
  height: ${({height}: ISCard) => height};
  border-radius: 20;
  margin: ${({margin}: ISCard) => (margin ? margin : '20px')};
`;

const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20;
`;

export const BookCard = ({width, height, margin, title, author}: ISCard) => {
  return (
    <SCard width={width} height={height} margin={margin}>
      <SImage
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/515fWvs+6bL._SX331_BO1,204,203,200_.jpg',
        }}
      />
      {title && (
        <STitle style={{fontSize: 16, textAlign: 'center', marginVertical: 5}}>
          {title}
        </STitle>
      )}
      {author && (
        <STitle
          style={{
            fontSize: 14,
            color: colors.lightGray,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 5,
          }}>
          {' '}
          {author}{' '}
        </STitle>
      )}
    </SCard>
  );
};
