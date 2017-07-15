import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../redux/modules/items';
import Items from './Items';
import Loader from '../../components/Loader/';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getItems());
    }

    render() {
        if (this.props.loading) return <Loader />;
        return <Items itemsData={this.props.itemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.itemsReducer.loading,
        itemsData: state.itemsReducer.itemsData
    };
}

// proptype validation goes here

export default connect(mapStateToProps)(ItemsContainer);
