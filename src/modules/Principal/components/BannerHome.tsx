import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import styled from 'styled-components';
import {IBannerHome} from '../interfaces/Principal';

const SBannerContainer = styled(View)`
  margin: 20px 0;
  background-color: ${colors.gray};
`;

const SBannerProfileContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkPurple};
  border-bottom-left-radius: 12.8px;
  border-bottom-right-radius: 12.8px;
`;

export const SProfileTitle = styled(Text)`
  color: ${colors.darkWhite};
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0 0 0;
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

export const SBannerProfile = ({image, children}: IBannerHome) => {
  const {width, height} = useWindowDimensions();
  return (
    <SBannerProfileContainer style={{width, height: height * 0.35}}>
      {!image ? (
        <></>
      ) : (
        <>
          <Image source={image} style={{resizeMode: 'stretch'}} />
          {children}
        </>
      )}
    </SBannerProfileContainer>
  );
};
