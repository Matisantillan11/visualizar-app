import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import styled from 'styled-components';
import {ISCard} from './interfaces/Card.interface';

const SCard = styled(View)<ISCard>`
  width: ${({width}: ISCard) => width};
  height: ${({height}: ISCard) => height};
  border-radius: 20;
  margin: 20px;
`;

const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20;
`;

export const BookCard = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SCard width={width * 0.4} height={height * 0.3}>
      <SImage
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/515fWvs+6bL._SX331_BO1,204,203,200_.jpg',
        }}
      />
    </SCard>
  );
};
