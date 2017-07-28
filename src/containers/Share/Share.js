import React from 'react';
import PropTypes from 'prop-types';

// import ShareForm from '../../components/ShareForm/';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './styles.css';

const Share = ({ stepIndex, renderStepActions, handleImageUpload, selectImage, handleSubmit }) => {
    let uploadInput = false;

    return (
        <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
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
                            <TextField hintText="Item description" />
                            {renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize your item.</StepLabel>
                        <StepContent>
                            <p>Let us know what type of item it is!</p>
                            {renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Confirm your thang!</StepLabel>
                        <StepContent>
                            <p>Is it all ready to share?</p>
                            {renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
                {/* {finished && (
                    <p style={{ margin: '20px 0', textAlign: 'center' }}>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            this.setState({stepIndex: 0, finished: false});
                        }}
                        >
                        Click here
                        </a> to reset the example.
                    </p>
                )}  */}
            </form>
        </div>
    );
};


// To Do: Prop types go here...

export default Share;
