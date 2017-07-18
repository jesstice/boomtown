import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems } from '../../redux/modules/items';
import { getUserData } from '../../redux/modules/profile';
import Loader from '../../components/Loader/';
import Profile from './Profile';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUserData(this.props.match.params.id));
        this.props.dispatch(getItems(this.props.match.params.id));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <Profile
                itemsData={this.props.itemsData}
                userData={this.props.userData}
                borrowedData={this.props.borrowedData}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profileReducer.loading,
        userData: state.profileReducer.userData,
        itemsData: state.itemsReducer.itemsData,
        borrowedData: state.itemsReducer.borrowedData
    };
}

Profile.propTypes = {
    itemsData: PropTypes.array,
    userData: PropTypes.array,
    borrowedData: PropTypes.array
};

export default connect(mapStateToProps)(ProfileContainer);
