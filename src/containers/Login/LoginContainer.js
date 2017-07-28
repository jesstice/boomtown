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
        // To do: add to thunk
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
            if (error.code === 'auth/user-not-found') {
                // user does not exist and must sign up
                // direct to <SignupForm />
            } else {
                // there was an error, show a message
            }
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    }

    join = () => {
        // To do: connect form with graphql
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated } = this.props;

        if (authenticated) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Login login={(e) => {
                e.preventDefault();
                this.login({
                    email: 'mackenzie@redacademy.com',
                    password: 'mackenzie' }); }}
            />
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.userProfile
});

// To do:
// this.props.authenticated.propTypes = PropTypes.bool.isRequired;
// location.state.propTypes

export default connect(mapStateToProps)(LoginContainer);
