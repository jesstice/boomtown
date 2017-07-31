import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Field,
    reduxForm
    // isPristine,
    // isSubmitting
} from 'redux-form';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './styles.css';


const validate = values => {
    const errors = {};
    const requiredFields = [
        'title',
        'description',
        'tags'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        multiple={true}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />
);

const listOfTags = [
    { id: 8, title: 'Tools' },
    { id: 9, title: 'Househouse Items' },
    { id: 10, title: 'Physical Media' },
    { id: 11, title: 'Musical Instruments' },
    { id: 12, title: 'Sporting Goods' },
    { id: 13, title: 'Electronics' },
    { id: 14, title: 'Recreational Equipment' },
];

let Share = ({ stepIndex, renderStepActions, selectImage, handleImageUpload, handleSubmit, values }) => {

    let uploadInput = false;
    const renderMenuItems = (tags) => {
        return tags.map((tag) => (
            <MenuItem
                key={tag.id}
                insetChildren={true}
                checked={values && values.values.tags.includes(tag.id)}
                value={tag.id}
                primaryText={tag.title}
            />
        ));
    };

    return (
        <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Add an image</StepLabel>
                        <StepContent>
                            <p>We live in a visual culture. Upload an image of the item you are sharing.</p>
                            <RaisedButton
                                label="Select an image"
                                onClick={() => selectImage(uploadInput)}
                            />
                            <input
                                onChange={handleImageUpload}
                                ref={(input) => { uploadInput = input; }}
                                hidden
                                type="file"
                                d="input"
                            />
                            {renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Add a Title and Description.</StepLabel>
                        <StepContent>
                            <p>Describe the item to entice borrowers.</p>
                            <Field
                                name="title"
                                label="Item Title"
                                component={renderTextField}
                            />
                            <Field
                                name="description"
                                label="Item Description"
                                component={renderTextField}
                            />
                            {renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize your item.</StepLabel>
                        <StepContent>
                            <p>Let us know what type of item it is!</p>
                            <Field
                                name="tags"
                                label="Item Categories"
                                component={renderSelectField}
                            >
                                {renderMenuItems(listOfTags)}
                            </Field>
                            {renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Confirm your things!</StepLabel>
                        <StepContent>
                            <p>Is it all ready to share?</p>
                            {renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
            </form>
        </div>
    );
};

Share = reduxForm({
    form: 'share',
    validate
})(Share);

renderSelectField.propTypes = {
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

renderTextField.propTypes = {
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

Share.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    renderStepActions: PropTypes.func.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    selectImage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    values: PropTypes.shape({
        values: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        })
    }).isRequired
};

export default Share;
