import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const validate = values => {
    const errors = {};
    const requiredFields = [
        'fullname',
        'email',
        'bio',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

const renderTextField = ({ input, label, hintText, type, rows, multiLine, meta: { touched, error }, ...custom }) => (
    <TextField
        hintText={hintText}
        floatingLabelText={label}
        errorText={touched && error}
        type={type}
        multiLine={multiLine}
        rows={rows}
        {...input}
        {...custom}
    />
);

let SignUpForm = ({ signUpUser }) => (
    <div className="page signup">
        <Paper zDepth={2}>
            <div className="formContainer">
                <h2>Hello Friend! Looks like you have not signed up with us yet!</h2>
                <form onSubmit={signUpUser} autoComplete="off">
                    <Field
                        name="fullname"
                        label="Full Name"
                        hintText="Rafael the Turtle"
                        component={renderTextField}
                    />
                    <Field
                        name="email"
                        label="Email"
                        hintText="rafael@ninjaturtles.com"
                        type="email"
                        component={renderTextField}
                    />
                    <Field
                        name="bio"
                        label="Bio"
                        multiLine={true}
                        rows={2}
                        hintText="I am a badass turtle that knows a little something called ka-ra-te!"
                        component={renderTextField}
                    />
                    <Field
                        name="password"
                        label="Password"
                        hintText="Not pa$$word okay?!"
                        type="password"
                        component={renderTextField}
                    />
                    <RaisedButton className="submitButton" primary fullWidth type="submit">
                        Submit
                    </RaisedButton>
                </form>
            </div>
        </Paper>
    </div>
);

SignUpForm = reduxForm({
    form: 'signup',
    validate
})(SignUpForm);

SignUpForm.PropTypes = {
    signUpUser: PropTypes.func.isRequired
};

renderTextField.propTypes = {
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    multiLine: PropTypes.bool.isRequired
};

export default SignUpForm;
