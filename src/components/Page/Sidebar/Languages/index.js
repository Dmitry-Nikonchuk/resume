import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from "react-country-flag";
import { Title, Text, GridRow } from "components/Layout";

const Languages = () => {
  const  { t } = useTranslation();

  const flagStyle = { width: 25 };

  return (
    <div>
      <Title>{t("langs.title")}</Title>
      <GridRow>
        <Flag countryCode="ru" svg style={flagStyle} />
        <Text>{t("langs.russianLevel")}</Text>
      </GridRow>
      <GridRow>
        <Flag countryCode="gb" svg style={flagStyle} />
        <Text>{t("langs.englishLevel")}</Text>
      </GridRow>
    </div>
  );
};

export default Languages;
