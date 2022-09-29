import {BookCard} from '@visualizar/common/Cards/BookCard';
import {FavoriteCard} from '@visualizar/common/Cards/FavoriteCard';
import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';

export const Home = () => {
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView style={{flex: 1}}>
      <ScrollView horizontal>
        <BookCard width={width * 0.4} height={height * 0.3} />
        <BookCard width={width * 0.4} height={height * 0.3} />
        <BookCard width={width * 0.4} height={height * 0.3} />
      </ScrollView>
      <View>
        <FavoriteCard />
        <FavoriteCard />
      </View>
    </ScrollView>
  );
};
