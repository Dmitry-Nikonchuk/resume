import React from 'react';
import LangSwitcher from 'components/LangSwitcher';
import ReactToPrint from 'react-to-print';

import * as S from './styled';

export default ({ pageRef }) => (
  <S.Container>
    <ReactToPrint
      content={() => pageRef?.current}
      trigger={() => <S.Btn>Print to PDF</S.Btn>}
    />
    <LangSwitcher />
  </S.Container>
);
