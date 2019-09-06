import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from 'components/layouts/Layout';
import Pages from 'components/layouts/Pages';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Layout />
      <Pages />
    </StylesProvider>
  );
};

export default App;
