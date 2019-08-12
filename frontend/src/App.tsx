import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from 'components/layouts/Layout';
import Parallax from 'components/layouts/Parallax';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Layout />
      <Parallax />
    </StylesProvider>
  );
};

export default App;
