import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FirebaseAuth } from '../../config/firebase';

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = ({ email, password }) => {

        FirebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
            if (error.code === 'auth/user-not-found') {
                // user does not exist and must sign up
                // dispatch action to sign user up
            } else {
                // there was an error, show a message
            }
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    }

    render() {
        const { authenticated } = this.props;

        if (authenticated) {
            return (
                <Redirect to={'/'} />
            );
        }

        this.login({
            email: 'cooluser@test.com',
            password: 'cooluser'
        });

        return (
            <Login login={this.login} />
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.userLoggedIn
});

// this.props.authenticated.propTypes = PropTypes.bool.isRequired;

export default connect(mapStateToProps)(LoginContainer);
