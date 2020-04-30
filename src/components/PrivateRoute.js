import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component, ...rest }) {
    const { isAuthenticated } = useSelector(state => state.user);
    return isAuthenticated ? <Route {...rest} component={component} /> : <Redirect to="/login" />;
}
PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};
