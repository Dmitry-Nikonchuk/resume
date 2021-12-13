import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles';
import theme from 'theme';

import Loader from 'components/Loader';
import Header from 'components/Header';
import Page from 'components/Page';

const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Page />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
