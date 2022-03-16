import React, { useMemo, useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import Flag from 'react-country-flag';

import * as S from './styled';

const LangSwitcher = ({ i18n }) => {
  const lng = useMemo(() => i18n.language, [i18n.language]);
  const handleChangeLng = useCallback(lang => () => i18n.changeLanguage(lang));
  const flagStyle = { width: 25 };
  return (
    <S.Buttons>
      <S.LngBtn isActive={lng === "ru"} onClick={handleChangeLng("ru")}>
        <Flag svg countryCode="ru" style={flagStyle} />
      </S.LngBtn>
      <S.LngBtn isActive={lng === "en"} onClick={handleChangeLng("en")}>
        <Flag svg countryCode="gb" style={flagStyle} />
      </S.LngBtn>
    </S.Buttons>
  );
};

export default withTranslation()(LangSwitcher);
