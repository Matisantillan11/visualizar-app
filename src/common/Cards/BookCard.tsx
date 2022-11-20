import {colors} from '@visualizar/lib/theme/colors';
import React, {Fragment} from 'react';
import {Image, Pressable, Text, useWindowDimensions, View} from 'react-native';
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

const SSeeMore = styled(Pressable)`
  padding: 8px;
  border: 1px solid ${colors.darkPurple};
  background-color: ${colors.darkPurple};
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 12px;
`;

export const BookCard = ({
  width,
  height,
  margin,
  title,
  author,
  horizontal,
}: ISCard) => {
  return (
    <SCard
      width={width}
      height={height}
      margin={margin}
      style={{
        flexDirection: horizontal && 'row',
        justifyContent: 'space-between',
      }}>
      <SImage
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/515fWvs+6bL._SX331_BO1,204,203,200_.jpg',
        }}
      />
      <View style={{width}}>
        {title && (
          <STitle
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginVertical: 5,
              marginLeft: horizontal && 30,
            }}>
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
              marginLeft: horizontal && 30,
            }}>
            {author}
          </STitle>
        )}
        {horizontal && (
          <SSeeMore>
            <STitle
              style={{
                fontSize: 14,
                color: colors.white,
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: 5,
              }}>
              Ver detalles{' '}
            </STitle>
          </SSeeMore>
        )}
      </View>
      {/* )} */}
    </SCard>
  );
};
