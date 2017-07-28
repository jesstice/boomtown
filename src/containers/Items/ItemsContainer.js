import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Items from './Items';
import Loader from '../../components/Loader/';

class ItemsContainer extends Component {

    filterItemsList = (filterValues, items) => {
        if (filterValues.length) {
            return items.filter((itemData) => itemData.tags.find(tag => filterValues.includes(tag))
            );
        }
        return items;
    }

    render() {
        const { data: { loading, items } } = this.props;
        const { filterValues } = this.props;
        const filteredItemsData = this.filterItemsList(filterValues, items);

        if (loading) return <Loader />;
        return <Items itemsData={filteredItemsData} />;
    }
}

const fetchItemsData = gql`
    query fetchItemsData {
        items {
            title
            itemowner {
                id
                fullname
                email
            }
            imageurl
            borrower {
                fullname
            }
            createdon
            description
            tags {
                title
            }
        }
    }
`;

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues
    };
}

ItemsContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        itemsData: PropTypes.object,
    }).isRequired,
    filterValues: PropTypes.array
};

const itemsDataList = graphql(fetchItemsData)(ItemsContainer);
export default connect(mapStateToProps)(itemsDataList);
