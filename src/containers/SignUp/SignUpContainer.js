import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUp';

class SignUpContainer extends Component {

    signUpUser = () => {
        // on completion of form, thank user and direct to main page
        // return <Redirect to={'/'} />;
    }

    render() {
        // const { authenticated } = this.props;

        // if (authenticated) {
        //     return (
        //         <Redirect to={'/'} />
        //     );
        // }
        return <SignUpForm signUpUser={this.signUpUser} />;
    }
}

// const mapStateToProps = state => ({
//     authenticated: state.auth.userProfile
// });

// To do: this.props.authenticated.propTypes = PropTypes.bool.isRequired;
export default SignUpContainer;

// export default connect(mapStateToProps)(SignUpContainer);
