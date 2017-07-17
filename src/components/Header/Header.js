import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FilterList from '../FilterList';

import Logo from '../../images/boomtown-logo.svg';
import './styles.css';

const style = {
    margin: 12
};

const Header = () => (
    <AppBar
        iconElementLeft={
            <Link exact to="/">
                <img className="header-logo" src={Logo} alt="logo" />
            </Link>}
        title={<FilterList  />}
    >
        <div className="header-right">
            <RaisedButton label="My Profile" primary={true} style={style.profile} />
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar>
);

export default Header;
