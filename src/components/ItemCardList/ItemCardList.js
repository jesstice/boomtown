import React from 'react';
import Masonry from 'react-masonry-component';

import ItemCard from '../../components/ItemCard/';
import './styles.css';

const masonryOptions = {
    transitionDuration: 1
};

const ItemCardList = ({ itemsData }) => {
    return (
        <Masonry
        className="itemCardListWrapper"
        elementType={'ul'}
        options={masonryOptions}
        >
            { itemsData && itemsData.map(itemData => (
                <ItemCard key={itemData.id} itemDetails={itemData} />
            ))}
        </Masonry>
    );
};

export default ItemCardList;