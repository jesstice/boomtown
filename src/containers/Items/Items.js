import React from 'react';
import PropTypes from 'prop-types';

import ItemCardList from '../../components/ItemCardList/';
import './styles.css';

const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

Items.propTypes = {
    itemsData: PropTypes.array
};

export default Items;
