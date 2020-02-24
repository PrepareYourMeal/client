import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from '@frontend/components';
import Dashboard from './Dashboard';
import Recipes from './Recipes';
import Planner from './Planner';
import Ingredients from './Ingredients';

export default function Pages() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/dashboard'} component={() => <Dashboard />} />
                <Route path={'/recipes'} component={() => <Recipes />} />
                <Route path={'/planner'} component={() => <Planner />} />
                <Route path={'/ingredients'} component={() => <Ingredients />} />
                <Redirect to={'/dashboard'} />
            </Switch>
        </Router>
    );
}
