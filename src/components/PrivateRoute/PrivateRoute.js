import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            authenticated
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
        )}
    />
);

const mapStateToProps = state => ({
    authenticated: state.auth.userProfile,
});

PrivateRoute.propTypes = {
    authenticated: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]).isRequired,
    location: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
