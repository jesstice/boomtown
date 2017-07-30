import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

import { FirebaseAuth } from '../../config/firebase';
// import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUp';

class SignUpContainer extends Component {

    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err));
    }

    signUpUser = (event) => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                fullname: `${this.props.values.values.fullname}`,
                bio: `${this.props.values.values.bio}`
                // email: `${this.props.values.values.email}`,
                // password: `${this.props.values.values.password}`
            }
        })
        .then(({ data }) => {
            console.log('hollaaaa');
            // this.login({
            //     email: `${this.props.values.values.email}`,
            //     password: `${this.props.values.values.password}`
            // });
        }).catch((error) => {
            console.log('there was an error sending the query', error);
        });
    }

    render() {
        // const { authenticated } = this.props;

        // if (authenticated) {
        //     return (
        //         <Redirect to={'/'} />
        //     );
        // }
        return <SignUpForm signUpUser={(event) => this.signUpUser(event)} />;
    }
}

const addUser = gql`
    mutation addUser(
        $fullname: String!
        $email: String!
        $bio: String
        $password: String!
    ) {
        addUser(
            fullname: $fullname
            email: $email
            bio: $bio
            password: $password
        ) {
            fullname
            email
            bio
        }
    }
`;

function mapStateToProps(state) {
    return {
        values: state.form.signup,
        authenticated: state.auth.userProfile
    };
}

// To do: this.props.authenticated.propTypes = PropTypes.bool.isRequired;

const newUserData = graphql(addUser)(SignUpContainer);
export default connect(mapStateToProps)(newUserData);
