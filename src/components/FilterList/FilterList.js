import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// TO DO: import action creator to dispatch action onChange

// const styles = {
//     customWidth: {
//         width: 150,
//     },
// };

const tags = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools',
];

// TO DO: refactor to stateless
class FilterList extends Component {

    handleChange = (event, index, this.props.filterValues) => this.setState({ values });

    menuItems(filterValues) {
        return tags.map((tag) => (
            <MenuItem
                key={tag}
                insetChildren={true}
                checked={filterValues && filterValues.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
        ));
    }

    render() {
        const { filterValues } = this.props.filterValues;
        return (
            <SelectField
                multiple={true}
                hintText="Filter by Tag"
                value={filterValues}
                onChange={this.handleChange}
            >
                {this.menuItems(filterValues)}
            </SelectField>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterValues: state.itemsReducer.filterValues
    };
}

export default connect(mapStateToProps)(FilterList);
