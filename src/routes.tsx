import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Cars} path="/cars" />
    </Switch>
  );
};

export default Routes;
