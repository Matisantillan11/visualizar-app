import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import styled from 'styled-components';
import {SAuthorFav, STitleFav} from '../Text';
import {BookCard} from './BookCard';
import {ISCard} from './interfaces/Card.interface';
import {Tag} from '../Tag/Tag';

const SFavoriteContainer = styled(View)<ISCard>`
  width: ${({width}: ISCard) => width};
  height: ${({height}: ISCard) => height};
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

const STextContainer = styled(View)`
  padding: 20px 0;
`;

const STagsContainer = styled(View)`
  width: auto;
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const FavoriteCard = () => {
  const {width, height} = useWindowDimensions();
  return (
    <SFavoriteContainer width={width * 0.95} height={height * 0.2}>
      <BookCard width={width * 0.3} height={height * 0.2} />
      <STextContainer>
        <STitleFav>The Tiny Dragon</STitleFav>
        <SAuthorFav> Ana C. Bouvier </SAuthorFav>
        <STagsContainer>
          <Tag color={colors.darkPurple} text={'Ficcion'} />
          <Tag color={colors.gray} text={'Novela'} />
        </STagsContainer>
      </STextContainer>
      <View></View>
    </SFavoriteContainer>
  );
};
