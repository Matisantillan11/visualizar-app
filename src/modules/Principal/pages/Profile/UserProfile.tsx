import React from 'react';
import {
  SBannerProfile,
  SProfileTitle,
} from '@visualizar/modules/Principal/components/BannerHome';
import UserProfile from '@visualizar/assets/images/user-profile.png';
import {Text} from 'react-native';
export const UserProfileScreen = () => {
  return (
    <SBannerProfile image={UserProfile}>
      <SProfileTitle>Matias Santillan</SProfileTitle>
      <SProfileTitle>6A | 4 Libros</SProfileTitle>
    </SBannerProfile>
  );
};
