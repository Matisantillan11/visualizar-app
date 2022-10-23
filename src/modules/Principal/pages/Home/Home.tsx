import {BookCard} from '@visualizar/common/Cards/BookCard';
import {FavoriteCard} from '@visualizar/common/Cards/FavoriteCard';
import {STitle} from '@visualizar/common/Text';
import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {BannerHome} from '../../components/BannerHome';

export const Home = () => {
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView style={{flex: 1}}>
      <BannerHome />
      <STitle style={{marginLeft: width * 0.05, fontSize: 20}}>
        Libros destacados
      </STitle>
      <ScrollView horizontal>
        <BookCard width={width * 0.4} height={height * 0.3} />
        <BookCard width={width * 0.4} height={height * 0.3} />
        <BookCard width={width * 0.4} height={height * 0.3} />
      </ScrollView>
      <View style={{width, marginVertical: height * 0.05}}>
        <STitle style={{marginLeft: width * 0.08, fontSize: 20}}>
          Mis favoritos
        </STitle>
        <FavoriteCard />
        <FavoriteCard />
      </View>
    </ScrollView>
  );
};
