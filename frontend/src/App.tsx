import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from 'components/layouts/Layout';
import Pages from 'components/layouts/Pages';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <CssBaseline />
        <Layout />
        <Pages />
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
