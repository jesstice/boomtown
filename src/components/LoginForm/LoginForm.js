import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './styles.css';

const LoginForm = () => (
    <Paper zDepth={2}>
        <h2>Looks like you have not signed up with us yet!</h2>
        <TextField
            hintText="Rafael"
            floatingLabelText="First Name"
            errorText="This field is required"
        />
        <TextField
            hintText="Turtle"
            floatingLabelText="Last Name"
            errorText="This field is required"
        />
        <TextField
            hintText="rafael@ninjaturtles.com"
            floatingLabelText="Email"
            errorText="This field is required"
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
            errorText="This field is required"
        />
    </Paper>
);

// Prop types go here...........

export default LoginForm;
