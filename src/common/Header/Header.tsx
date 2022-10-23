import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import {IHeader} from './interfaces/Header.interface';
import HorizontalLogo from '@visualizar/assets/images/logo-visualizar-horizontal.png';

const SHeader = styled(View)`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const STitleContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SHeaderTitle = styled(Text)`
  color: ${colors.black};
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

const SPointsContainer = styled(View)`
  width: 40%;
  height: 40px;
  padding: 0 5px;
  border-radius: 50;
  background-color: ${colors.mediumPurple};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SPointsText = styled(Text)`
  color: ${colors.darkWhite};
  font-weight: 700;
  font-size: 14px;
  margin: 0 5px;
  line-height: 14px;
`;

export const Header = ({backButton, username, points}: IHeader) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <SHeader>
        <STitleContainer>
          {backButton}
          <Image
            source={HorizontalLogo}
            style={{width: width * 0.34, height: height * 0.04}}
          />
        </STitleContainer>

        <Icon name="power" size={30} color={colors.gray} />
      </SHeader>
    </SafeAreaView>
  );
};
