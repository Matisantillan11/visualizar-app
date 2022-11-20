import React, {useState} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {ViewBox} from '@visualizar/modules/Principal/components/ViewBox';
import {STitle} from '@visualizar/common/Text';
import {BookCard} from '@visualizar/common/Cards/BookCard';

export const BookScreen = () => {
  const {width, height} = useWindowDimensions();
  const [isFocused, setIsFocused] = useState<'BoxMode' | 'ListMode'>('BoxMode');
  const [isHorizontal, setIsHorizontal] = useState<boolean>(false);
  const handleViewMode = (viewMode: 'BoxMode' | 'ListMode') => {
    setIsFocused(viewMode);
    if (viewMode === 'ListMode') {
      setIsHorizontal(true);
    } else {
      setIsHorizontal(false);
    }
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
            flexDirection: isHorizontal ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flex: 1,
            paddingBottom: 50,
          }}>
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
          <BookCard
            margin={isHorizontal ? '15px' : '35px 20px'}
            width={width * 0.39}
            height={height * 0.3}
            title="The tiny dragon"
            author="Rupert Carter"
            horizontal={isHorizontal}
          />
        </View>
      </ScrollView>
    </View>
  );
};
