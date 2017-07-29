import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FirebaseStorage, FirebaseAuth } from '../../config/firebase';
import { updateStepIndex, setItemImageUrl } from '../../redux/modules/share';

import Share from './Share';

class ShareContainer extends Component {

    handleNext = () => {
        const { stepIndex } = this.props;
        return this.props.dispatch(updateStepIndex(stepIndex + 1));
    }

    handlePrev = (stepIndex) => {
        if (stepIndex > 0) {
            return this.props.dispatch(updateStepIndex(stepIndex - 1));
        }
        return this.props.dispatch(updateStepIndex(stepIndex));
    }

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    handleImageUpload = () => {
        const firebaseStorage = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;

        // this.props.dispatch(startImageUpload());
        // updates the store with the new image
        firebaseStorage.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result);
                this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
                this.handleNext();
            });
    }

    handleSubmit = (values) => {
        this.props.mutate({
            variables: {
                title: 'this.props.values.title',
                itemowner: 'this.props.authenticated',
                description: 'this.props.values.description',
            }
        })
        .then(({ data }) => {
            console.log('got data', data);
        }).catch((error) => {
            console.log('there was an error sending the query', error);
        });
    };


    // To do: Add state and connect to presentational component
    renderStepActions = (step) => {
        const { stepIndex } = this.props;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={() => this.handleNext()}
                    style={{ marginRight: 12 }}
                />
                { step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={() => this.handlePrev()}
                    />
                ) }
            </div>
        );
    }

    render() {
        const { stepIndex } = this.props;

        return (
            <Share
                stepIndex={stepIndex}
                renderStepActions={this.renderStepActions}
                handleImageUpload={this.handleImageUpload}
                selectImage={this.selectImage}
                handleSubmit={() => this.handleSubmit}
            />
        );
    }
}

const addItem = gql`
    mutation addItem (
        $title: String!
        $description: String!
        $itemowner: ID!
        $tags: [AssignedTag]!
    ) {
    addItem (
        title: $title
        description: $description
        itemowner: $itemowner
        tags: $tags
    ) {
        id
    }
    }
`;

// TO DO: Create step index and connect to store
function mapStateToProps(state) {
    return {
        values: state.form.share,
        stepIndex: state.share.stepIndex,
        authenticated: state.auth.userProfile,
        imageUrl: state.share.imageUrl
    };
}

// TO DO: Prop Types
ShareContainer.propTypes = {
    mutate: PropTypes.func.isRequired
};

const newItemData = graphql(addItem)(ShareContainer);
export default connect(mapStateToProps)(newItemData);
