import React from 'react';
import PropTypes from 'prop-types';

import ItemCardList from '../../components/ItemCardList/';
import './styles.css';

const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

Items.propTypes = {
    itemsData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imageurl: PropTypes.string,
        createdon: PropTypes.string,
        tags: PropTypes.array,
        itemowner: PropTypes.shape({
            id: PropTypes.string,
            fullname: PropTypes.string,
            email: PropTypes.string
        }),
        borrower: PropTypes.shape({
            fullname: PropTypes.string
        })
    }).isRequired
};

export default Items;
