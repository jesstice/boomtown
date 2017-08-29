import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCard from '../../components/ItemCard/';
import './styles.css';

const masonryOptions = {
    transitionDuration: 1
};

const ItemCardList = ({ itemsData }) => (
    <Masonry
        className="itemCardListWrapper"
        elementType={'ul'}
        options={masonryOptions}
    >
        { itemsData && itemsData.map(itemData => (
            <ItemCard key={itemData.imageurl} itemDetails={itemData} />
        ))}
    </Masonry>
);

ItemCardList.propTypes = {
    itemsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        }).isRequired
    )
};

export default ItemCardList;
