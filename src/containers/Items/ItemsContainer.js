import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems } from '../../redux/modules/items';
import Items from './Items';
import Loader from '../../components/Loader/';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getItems());
    }

    filterItemsList(filterValues) {
        const { itemsData } = this.props;

        if (filterValues.length) {
            itemsData.filter((itemData) => filterValues.find(filterValue => itemData.tags === filterValue));
            // filter items based on tags find()
        }

        return itemsData;
    }

    render() {
        const { filterValues } = this.props;
        const filteredItemsData = this.filterItemsList(filterValues);

        if (this.props.loading) return <Loader />;
        return <Items itemsData={filteredItemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.itemsReducer.loading,
        itemsData: state.itemsReducer.itemsData,
        filterValues: state.itemsReducer.filterValues
    };
}

Items.propTypes = {
    itemsData: PropTypes.array
};

export default connect(mapStateToProps)(ItemsContainer);
