import React from 'react';

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
            multiple={true}
            hintText="Filter by Tag"
            value={filterValues}
            onChange={(event, index, value) => dispatch(handleChange(value))}
        >
            {tags.map((tag) => (
                <MenuItem
                    key={tag}
                    insetChildren={true}
                    checked={filterValues && filterValues.includes(tag)}
                    value={tag}
                    primaryText={tag}
                />
            ))}
        </SelectField>
    );
};

// class FilterList extends Component {

//     handleChange = (event, index, filterValues) => this.props.dispatch(selectFilterItems(filterValues));

//     // add selectValues as prop

//     // handleChange = (event, index, values) => dispatch(onChangeAction(values, selectValues, change));

//     menuItems(filterValues) {
//         return tags.map((tag) => (
//             <MenuItem
//                 key={tag}
//                 insetChildren={true}
//                 checked={filterValues && filterValues.includes(tag)}
//                 value={tag}
//                 primaryText={tag}
//             />
//         ));
//     }

//     render() {
//         const { filterValues } = this.props;
//         return (
//             <SelectField
//                 multiple={true}
//                 hintText="Filter by Tag"
//                 value={filterValues}
//                 onChange={this.handleChange}
//             >
//                 {/*move menu items here*/}
//                 {this.menuItems(filterValues)}
//             </SelectField>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         filterValues: state.itemsReducer.filterValues
//     };
// }

export default FilterList;
