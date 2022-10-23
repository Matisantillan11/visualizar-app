import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import styled from 'styled-components';
import {IBannerHome} from '../interfaces/Principal';

const SBannerContainer = styled(View)`
  margin: 20px 0;
  background-color: ${colors.gray};
`;

export const BannerHome = ({image}: IBannerHome) => {
  const {width, height} = useWindowDimensions();
  return (
    <SBannerContainer style={{width, height: height * 0.33}}>
      {!image ? (
        <></>
      ) : (
        <Image source={image} style={{resizeMode: 'stretch'}} />
      )}
    </SBannerContainer>
  );
};
