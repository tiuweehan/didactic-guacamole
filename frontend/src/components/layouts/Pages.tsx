import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/home/Home';
import Experience from 'components/experience/Experience';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/experience" component={Experience} />
    </Switch>
  );
};

export default Pages;
