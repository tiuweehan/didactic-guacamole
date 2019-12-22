import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/home/pages/Home';
import Experience from 'components/experience/pages/Experience';
import Projects from 'components/projects/pages/Projects';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
};

export default Pages;
