import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from 'components/layouts/Layout';
import Pages from 'components/layouts/Pages';
import ReactGA from 'react-ga';

const trackingId = 'UA-155259189-1';

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname);
  }, []);

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
