import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader/';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <AppHeader />
        </div>
        <div className="appContent">
            {children}
        </div>
        <footer className="appFooter">© 2017 Boomtown Corp. All Rights Reserved</footer>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
