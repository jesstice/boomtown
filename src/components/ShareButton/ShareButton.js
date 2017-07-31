import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './styles.css';

const ShareButton = ({ authenticated }) => {
    if (authenticated) {
        return (
            <FloatingActionButton
                className="shareButton"
                secondary={true}
                containerElement={<Link to={'/share'} />}
            >
                <ContentAdd />
            </FloatingActionButton>
        );
    } else {
        return null;
    }
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.userProfile
    };
}

export default connect(mapStateToProps)(ShareButton);