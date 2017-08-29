import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FirebaseAuth } from '../../config/firebase';
import { showSignupForm } from '../../redux/modules/auth';

import Login from './Login';

class LoginContainer extends Component {

    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
            if (error.code === 'auth/user-not-found') {
                this.props.dispatch(showSignupForm(true));
            } else {
                throw error;
            }
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated, signup } = this.props;

        if (authenticated) {
            return (
                <Redirect to={from} />
            );
        }

        if (signup) {
            return (
                <Redirect to={'/signup'} />
            );
        }

        return (
            <Login login={(e) => {
                e.preventDefault();
                this.login({
                    email: this.props.values.values.email,
                    password: this.props.values.values.password
                });
            }}
            />
        );
    }
}

const mapStateToProps = state => ({
    values: state.form.login,
    authenticated: state.auth.userProfile,
    signup: state.auth.signupForm
});

LoginContainer.propTypes = {
    authenticated: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]).isRequired,
    location: PropTypes.string.isRequired,
    signup: PropTypes.bool.isRequired,
    values: PropTypes.shape({
        values: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        })
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
