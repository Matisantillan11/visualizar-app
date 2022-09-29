import {BookCard} from '@visualizar/common/Cards/BookCard';
import React from 'react';
import {ScrollView, Text} from 'react-native';

export const Home = () => {
  return (
    <ScrollView horizontal>
      <BookCard />
      <BookCard />
      <BookCard />
    </ScrollView>
  );
};
