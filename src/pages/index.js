import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar, PrivateRoute } from '@frontend/components';
import Dashboard from './Dashboard';
import Recipes from './Recipes';
import Planner from './Planner';
import Ingredients from './Ingredients';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Pages() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/recipe'} component={() => <Recipes />} />
                <Route path={'/planner'} component={() => <Planner />} />
                <Route path={'/ingredients'} component={() => <Ingredients />} />
                <Route path={'/signin'} component={() => <SignIn />} />
                <Route path={'/signup'} component={() => <SignUp />} />
                <PrivateRoute path={'/dashboard'} component={() => <Dashboard />} />
                <Redirect to={'/recipe'} />
            </Switch>
        </Router>
    );
}
