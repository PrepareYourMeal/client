import React, {useContext} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {AuthContext} from './authentication/Auth';
import Layout from './container/Layout/Layout';
import {
    LANDING_PAGE,
    HOME_PAGE,
    FAVORITES_PAGE,
    PLANNER_PAGE,
    INGREDIENTS_PAGE,
    RECIPES_PAGE,
    RECIPE_DETAILS_PAGE,
    CONTACT_PAGE,
    PRIVACY_PAGE,
    HELP_PAGE,
    LOGIN_PAGE,
    REGISTRATION_PAGE,
    FORGET_PASSWORD_PAGE,
    PROFILE_PAGE
} from './settings/constant';

/*Public Routes*/
const Loading = () => null;

const routes = [
    {
        path: LANDING_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/Landing/Landing'),
                loading: Loading,
                modules: ['Home']
            }
        ),
        exact: true
    },
    {
        path: LOGIN_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/SignIn/SignIn'),
                loading: Loading,
                modules: ['SignIn']
            }
        )
    },
    {
        path: CONTACT_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/Contact/Contact'),
                loading: Loading,
                modules: ['Contact']
            }
        )
    },
    {
        path: REGISTRATION_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/SignUp/SignUp'),
                loading: Loading,
                modules: ['SignUp']
            }
        )
    }, {
        path: FORGET_PASSWORD_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/ForgetPassWord/ForgetPassWord'),
                loading: Loading,
                modules: ['ForgetPassWord']
            }
        )
    }, {
        path: RECIPES_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/Recipes/Recipes'),
                loading: Loading,
                modules: ['Recipes']
            }
        )
    }, {
        path: `${RECIPE_DETAILS_PAGE}/:slug`,
        component: Loadable(
            {
                loader: () => import ('./container/Recipes/Recipe'),
                loading: Loading,
                modules: ['Recipe']
            }
        )
    }, {
        path: PRIVACY_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/Privacy/Privacy'),
                loading: Loading,
                modules: ['Privacy']
            }
        )
    }, {
        path: HELP_PAGE,
        component: Loadable(
            {
                loader: () => import ('./container/Help/Help'),
                loading: Loading,
                modules: ['Help']
            }
        )
    },
];

/*Private Routes*/
const home = Loadable({
    loader: () => import (
            './container/Home/Home'
    ),
    loading: Loading,
    modules: ['Home']
});

const profile = Loadable({
    loader: () => import (
            './container/Profile/Profile'
    ),
    loading: Loading,
    modules: ['Profile']
});

const favorites = Loadable({
    loader: () => import (
            './container/Favorites/Favorites'
    ),
    loading: Loading,
    modules: ['Favorites']
});

const planner = Loadable({
    loader: () => import (
            './container/Planner/Planner'
    ),
    loading: Loading,
    modules: ['Planner']
});

const ingredients = Loadable({
    loader: () => import (
            './container/Ingredients/Ingredients'
    ),
    loading: Loading,
    modules: ['Ingredients']
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loggedIn } = useContext(AuthContext);
    return (
      <Route
        render={props =>
          loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
        }
        {...rest}
      />
    );
  };


/*Default Router Component*/
const Routes = () => {
    return (
    <Layout>
        <Switch> {
            routes.map(({
                path,
                component,
                exact = false
            }) => (<Route key={path}
                path={path}
                exact={exact}
                component={component}/>))
        }
            <ProtectedRoute path={HOME_PAGE} component={home}/>
            <ProtectedRoute path={PROFILE_PAGE} component={profile}/>
            <ProtectedRoute path={FAVORITES_PAGE} component={favorites}/>
            <ProtectedRoute path={PLANNER_PAGE} component={planner}/>
            <ProtectedRoute path={INGREDIENTS_PAGE} component={ingredients}/>
        </Switch>
    </Layout>
    );
};

export default Routes;
