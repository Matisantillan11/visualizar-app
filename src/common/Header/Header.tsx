import {colors} from '@visualizar/lib/theme/colors';
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {IHeader} from './interfaces/Header.interface';

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
  return (
    <SafeAreaView>
      <SHeader>
        <STitleContainer>
          {backButton}
          <SHeaderTitle style={backButton ? {marginHorizontal: 10} : null}>
            {username}
          </SHeaderTitle>
        </STitleContainer>
        <SPointsContainer>
          <Icon
            style={{transform: [{rotate: '45deg'}]}}
            name="swap-vert-circle"
            size={30}
            color={colors.white}
          />
          <SPointsText>{points}</SPointsText>
        </SPointsContainer>
      </SHeader>
    </SafeAreaView>
  );
};
