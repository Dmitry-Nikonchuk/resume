import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styled';

const Page = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Row>
        <S.Col horizontalCenter bordered>
          <S.Avatar />
        </S.Col>
        <S.Col bordered>
          <S.Title>{t("name")}</S.Title>
          <S.SubTitle>{t('profession')}</S.SubTitle>
        </S.Col>
      </S.Row>
    </S.Container>
  );
};

export default Page;
