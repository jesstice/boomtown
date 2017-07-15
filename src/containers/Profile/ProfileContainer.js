import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../redux/modules/items';
import { getUserData } from '../../redux/modules/profile';
import Loader from '../../components/Loader/';
import Profile from './Profile';
import Items from '../Items';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUserData(this.props.match.params.id));
        this.props.dispatch(getItems(this.props.match.params.id));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <div>
                <Profile userData={this.props.userData} />
                <Items itemsData={this.props.itemsData} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profileReducer.loading,
        userData: state.profileReducer.userData,
        itemsData: state.itemsReducer.itemsData
    };
}

// TO DO: proptype validation goes here

export default connect(mapStateToProps)(ProfileContainer);
