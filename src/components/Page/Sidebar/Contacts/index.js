import React from 'react';
import { useTranslation } from 'react-i18next';


import { Title, Grid, GridRow, Text } from "components/Layout";
import Link from "components/Link";

import { Phone, Mail, Skype, LinkedIn, Location } from './styled';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t("contacts.title")}</Title>
      <Grid>
        <GridRow>
          <Phone />
          <Link
            to="tel:+375292229051"
            isOpenOnjNewTab={false}
            isColored={false}
          >
            +375 (29) 222-90-51
          </Link>
        </GridRow>
        <GridRow>
          <Mail />
          <Link
            to="mailto:dmitry.nikonchuk89@gmail.ru"
            isOpenOnjNewTab={false}
            isColored={false}
          >
            dmitry.nikonchuk89@gmail.ru
          </Link>
        </GridRow>
        <GridRow>
          <Skype />
          <Link
            to="skype:nikonchuk_dmitrey?chat"
            isOpenOnjNewTab={false}
            isColored={false}
          >
            nikonchuk_dmitrey
          </Link>
        </GridRow>
        <GridRow>
          <LinkedIn />
          <Link
            to="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BD%D1%87%D1%83%D0%BA-b9b966115/"
            isColored={false}
          >
            https://www.linkedin.com/in/...
          </Link>
        </GridRow>
        <GridRow>
          <Location />
          <Text>{t("contacts.locationString")}</Text>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Contacts;
