import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import Objects from './pages/Objects';
import HomeObjects from './pages/HomeObjects';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Cars} path="/cars" />
      <Route component={Objects} path="/objects" />
      <Route component={HomeObjects} path="/home-objects" />
    </Switch>
  );
};

export default Routes;
