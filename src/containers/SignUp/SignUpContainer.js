import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
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
            variables: { fullname: 'simba', bio: 'Hear me roar', email: 'simba@lion.ca', password: '123roar' }
        })
            .then(({ data }) => {
                this.login({ email: 'simba@lion.ca', password: '123roar' });
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

// const mapStateToProps = state => ({
//     authenticated: state.auth.userProfile
// });

// To do: this.props.authenticated.propTypes = PropTypes.bool.isRequired;

const newUserData = graphql(addUser)(SignUpContainer);
export default newUserData;

// export default connect(mapStateToProps)(SignUpContainer);
