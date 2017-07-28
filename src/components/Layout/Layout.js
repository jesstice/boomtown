import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Header from '../Header/';
import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
        </div>
        <div className="appContent">
            {children}
            <FloatingActionButton className="shareButton" secondary={true}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
        <footer className="appFooter">© 2017 Boomtown Corp. All Rights Reserved</footer>
    </div>
);

Layout.defaultProps = {
    children: null
};

// TO DO: mapStateToProps

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
