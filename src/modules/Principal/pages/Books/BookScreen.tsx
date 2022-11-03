import React, {useState} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {ViewBox} from '@visualizar/modules/Principal/components/ViewBox';
import {STitle} from '@visualizar/common/Text';
import {BookCard} from '@visualizar/common/Cards/BookCard';

export const BookScreen = () => {
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
        <STitle> Todos los libros </STitle>
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
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
          <BookCard
            margin="35px 20px"
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
          />
        </View>
      </ScrollView>
    </View>
  );
};
