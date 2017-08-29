import React from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const FilterList = ({ dispatch, filterValues, handleChange }) => {
    const tags = [
        'Electronics',
        'Household Items',
        'Musical Instruments',
        'Physical Media',
        'Recreational Equipment',
        'Sporting Goods',
        'Tools',
    ];

    return (
        <SelectField
            multiple
            hintText="Filter by Tag"
            value={filterValues}
            onChange={(event, index, value) => dispatch(handleChange(value))}
        >
            {tags.map((tag) => (
                <MenuItem
                    key={tag}
                    insetChildren
                    checked={filterValues && filterValues.includes(tag)}
                    value={tag}
                    primaryText={tag}
                />
            ))}
        </SelectField>
    );
};

FilterList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default FilterList;
