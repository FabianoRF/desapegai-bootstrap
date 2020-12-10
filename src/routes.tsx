import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import Objects from './pages/Objects';
import HomeObjects from './pages/HomeObjects';
import RegisterProduct from './pages/RegisterProduct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Cars} path="/cars" />
      <Route component={Objects} path="/objects" />
      <Route component={HomeObjects} path="/home-objects" />
      <Route component={RegisterProduct} path="/register-products" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </Switch>
  );
};

export default Routes;
