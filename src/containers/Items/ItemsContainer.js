import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import * as actions from '../../redux/actions';

import Items from './Items';
import Loader from '../../components/Loader/';

class ItemsContainer extends Component {

    componentDidMount() {
        store.dispatch(actions.getItems());
    }

    render() {
        if (this.props.loading) return <Loader />;
        return <Items itemsData={this.props.itemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        itemsData: state.itemsData
    };
}

export default connect(mapStateToProps)(ItemsContainer);
