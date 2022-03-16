import React from 'react';
import LangSwitcher from 'components/LangSwitcher';
import ReactToPrint from 'react-to-print';

import { GoFilePdf } from 'react-icons/go';

import * as S from './styled';

export default ({ pageRef }) => (
  <S.Container>
    <ReactToPrint
      content={() => pageRef?.current}
      trigger={() => <S.Btn><GoFilePdf size={25} />Export to PDF</S.Btn>}
    />
    <LangSwitcher />
  </S.Container>
);
