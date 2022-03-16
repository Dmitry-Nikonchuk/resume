import React from 'react';
import spinner from 'images/spinner.png';

import * as S from './styled';

const Loader = () => {
  return (
    <S.Container>
      <img src={spinner} alt="Loader" />
    </S.Container>
  );
};

export default Loader;
