import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('authUser') ?
                <Component {...props} />
            : <Redirect to="/auth/login" />
        )} />
    );
};

export default PrivateRoute