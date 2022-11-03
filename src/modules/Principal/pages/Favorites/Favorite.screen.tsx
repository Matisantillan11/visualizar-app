import React, {useState} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {ViewBox} from '@visualizar/modules/Principal/components/ViewBox';
import {STitle} from '@visualizar/common/Text';
import {BookCard} from '@visualizar/common/Cards/BookCard';
import {FavoriteCard} from '@visualizar/common/Cards/FavoriteCard';

export const FavoriteScreen = () => {
  const {width, height} = useWindowDimensions();
  const [isFocused, setIsFocused] = useState<'BoxMode' | 'ListMode'>('BoxMode');

  const handleViewMode = (viewMode: 'BoxMode' | 'ListMode') => {
    setIsFocused(viewMode);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 10,
        }}>
        <STitle> Tus favoritos </STitle>
        <ViewBox isFocused={isFocused} changeViewMode={handleViewMode} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flex: 1,
            paddingBottom: 50,
          }}>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </View>
      </ScrollView>
    </View>
  );
};
