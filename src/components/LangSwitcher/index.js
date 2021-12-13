import React, { useMemo, useCallback } from 'react';
import { withTranslation } from 'react-i18next';

import * as S from './styled';

const LangSwitcher = ({ i18n }) => {
  const lng = useMemo(() => i18n.language, [i18n.language]);
  const handleChangeLng = useCallback(lang => () => i18n.changeLanguage(lang));
  return (
    <S.Buttons>
      <S.LngBtn isActive={lng === "ru"} onClick={handleChangeLng("ru")}>
        RU
      </S.LngBtn>
      <S.LngBtn isActive={lng === "en"} onClick={handleChangeLng("en")}>
        EN
      </S.LngBtn>
    </S.Buttons>
  );
};

export default withTranslation()(LangSwitcher);
