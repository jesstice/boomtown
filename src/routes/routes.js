import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Share';
import SignUp from '../containers/SignUp';
import NotFound from '../containers/NotFound';

const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/" component={Items} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <PrivateRoute path="/share" component={Share} />
        <PrivateRoute component={NotFound} />
    </Switch>
);

export default Routes;
