import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';

const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
