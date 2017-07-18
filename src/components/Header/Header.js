import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FilterList from '../FilterList';
import { selectFilterItems } from '../../redux/modules/items';

import Logo from '../../images/boomtown-logo.svg';
import './styles.css';

const style = {
    margin: 12
};

const Header = ({ dispatch, filterValues }) => (
    <AppBar
        iconElementLeft={
            <Link exact to="/">
                <img className="header-logo" src={Logo} alt="logo" />
            </Link>}
        title={
            <FilterList
                dispatch={dispatch}
                handleChange={selectFilterItems}
                filterValues={filterValues}
            />}
    >
        <div className="header-right">
            <RaisedButton label="My Profile" primary={true} style={style.profile} />
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar>
);

function mapStateToProps(state) {
    return {
        filterValues: state.itemsReducer.filterValues
    };
}

export default connect(mapStateToProps)(Header);
