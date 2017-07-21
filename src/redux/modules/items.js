// ACTION CONSTANTS
export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';

export function selectFilterItems(filterValues) {
    return {
        type: SELECT_FILTER_ITEMS,
        payload: filterValues
    };
}

// REDUCERS
const initialState = {
    filterValues: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_FILTER_ITEMS:
            const filterState = {
                ...state,
                filterValues: action.payload
            };
            return filterState;
        default:
            return state;
    }
}
