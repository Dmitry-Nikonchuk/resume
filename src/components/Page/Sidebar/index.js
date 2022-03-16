import React from 'react';

import Contacts from './Contacts';
import Skills from './Skills';
import Languages from './Languages';

import * as S from './styled';

export default () => (
  <S.Container>
    <S.AvatarContainer>
      <S.Avatar />
    </S.AvatarContainer>
    <Contacts />
    <Skills />
    <Languages />
  </S.Container>
);
