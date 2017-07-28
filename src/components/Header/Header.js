import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FilterList from '../FilterList';
import { selectFilterItems } from '../../redux/modules/items';

import { FirebaseAuth } from '../../config/firebase';

import Logo from '../../images/boomtown-logo.svg';
import './styles.css';

const style = {
    margin: 12
};


const Header = ({ dispatch, filterValues, authenticated }) => (

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
                />
        }
    >
        <div className="header-right">
            <RaisedButton
                label="My Profile"
                containerElement={<Link to={`/profile/${authenticated}`} />}
                linkButton={true}
                primary={true}
                style={style.profile}
            />
            <RaisedButton
                label="Logout"
                onTouchTap={() => FirebaseAuth.signOut()}
                secondary={true}
                style={style}
            />
        </div>
    </AppBar>
);

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues,
        authenticated: state.auth.userProfile
    };
}

Header.propTypes = {
    filterValues: PropTypes.array,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Header);
