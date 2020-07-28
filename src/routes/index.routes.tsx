import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RegistrationVideo from '../pages/RegistrationVideo';
import CreateCategory from '../pages/CreateCategory';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/video/registration" component={RegistrationVideo} />
    <Route path="/video/category/create" component={CreateCategory} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
