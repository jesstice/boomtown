import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route exact path="/" component={Items} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/share" component={Share} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
