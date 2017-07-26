import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const SignUpForm = ({ signUpUser }) => (
    <div className="page signup">
        <Paper zDepth={2}>
            <div className="formContainer">
                <h2>Hello Friend! Looks like you have not signed up with us yet!</h2>
                <form onSubmit={signUpUser} autoComplete="off">
                    <TextField
                        hintText="Rafael the Turtle"
                        floatingLabelText="Full Name"
                    />
                    <TextField
                        hintText="rafael@ninjaturtles.com"
                        floatingLabelText="Email"
                    />
                    <TextField
                        hintText="I am a badass turtle that knows a little something called ka-ra-te!"
                        floatingLabelText="Tell us about yourself"
                        multiLine={true}
                        rows={2}
                    />
                    <TextField
                        hintText="Secret Password"
                        floatingLabelText="Password"
                        type="password"
                    />
                    <RaisedButton className="submitButton" primary fullWidth type="submit">
                        Submit
                    </RaisedButton>
                </form>
            </div>
        </Paper>
    </div>
);

SignUpForm.PropTypes = {
    signUpUser: PropTypes.func.isRequired
};

export default SignUpForm;
