import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// TO DO: import action creator to dispatch action onChange

// const styles = {
//     customWidth: {
//         width: 150,
//     },
// };

// TO DO: refactor to stateless
export default class FilterList extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText="Filter by Tag"
                    value={this.state.value}
                    onChange={this.handleChange} // TO DO: dispatch action to update store
                >
                    <MenuItem value={1} primaryText="Electronics" />
                    <MenuItem value={2} primaryText="Household Items" />
                    <MenuItem value={3} primaryText="Musical Instruments" />
                    <MenuItem value={4} primaryText="Physical Media" />
                    <MenuItem value={5} primaryText="Recreational Equipment" />
                    <MenuItem value={6} primaryText="Sporting Goods" />
                    <MenuItem value={7} primaryText="Tools" />
                </SelectField>
            </div>
        );
    }
}
