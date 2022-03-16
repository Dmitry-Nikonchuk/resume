import React, { Suspense, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles';
import theme from 'theme';

import Loader from 'components/Loader';
import Header from 'components/Header';
import Page from 'components/Page';

const App = () => {
  const pageRef = useRef(null);

  console.log(pageRef);

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header pageRef={pageRef} />
        <Page pageRef={pageRef} />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
