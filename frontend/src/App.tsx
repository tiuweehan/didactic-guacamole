import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from 'components/layouts/Layout';
import Main from 'components/layouts/Main';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Layout />
      <Main />
    </StylesProvider>
  );
};

export default App;
