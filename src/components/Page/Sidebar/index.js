import React from 'react';
import { useTranslation } from 'react-i18next';
import {Title, SubTitle, Text } from 'components/Layout';

import * as S from './styled';

export default () => {
  const  { t } = useTranslation();

  return (
    <S.Container>
      <S.AvatarContainer>
        <S.Avatar />
      </S.AvatarContainer>
      <S.Contacts>
        <Title>{t("contacts.title")}</Title>
        <S.GridRow>
          <SubTitle colored>{t("contacts.phone")}:</SubTitle>
          <Text>+375 (29) 222-90-51</Text>
        </S.GridRow>
        <S.GridRow>
          <SubTitle colored>{t("contacts.email")}:</SubTitle>
          <Text>nicon66@mail.ru</Text>
        </S.GridRow>
        <S.GridRow>
          <SubTitle colored>{t("contacts.skype")}:</SubTitle>
          <Text>nikonchuk_dmitrey</Text>
        </S.GridRow>
        <S.GridRow>
          <SubTitle colored>{t("contacts.location")}:</SubTitle>
          <Text>{t("contacts.locationString")}</Text>
        </S.GridRow>
      </S.Contacts>
      <S.Skills>
        <Title>{t("skills.title")}</Title>
        <S.List>
          {t("skills.list", { returnObjects: true }).map((item) => (
            <S.ListItem key={item}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Skills>
      <S.Languages>
        <Title>{t("langs.title")}</Title>
        <S.GridRow>
          <SubTitle colored>{t("langs.russian")}</SubTitle>
          <Text>{t("langs.russianLevel")}</Text>
        </S.GridRow>
        <S.GridRow>
          <SubTitle colored>{t("langs.english")}</SubTitle>
          <Text>{t("langs.englishLevel")}</Text>
        </S.GridRow>
      </S.Languages>
    </S.Container>
  );
};
