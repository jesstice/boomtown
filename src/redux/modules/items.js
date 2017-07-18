// ACTION CONSTANTS
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';
export const GET_BORROWED_DATA = 'GET_BORROWED_DATA';

// ACTION CREATORS
export function loadItems(itemsWithOwners, borrowedData) {
    return {
        type: LOAD_ITEMS,
        payload: {
            itemsWithOwners,
            borrowedData
        }
    };
}

export function getborrowedData(borrowedData) {
    return {
        type: GET_BORROWED_DATA,
        payload: borrowedData
    };
}

export function getItems(userId) {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            let itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                const borrowerName = users.filter(user => user.id === item.borrower);
                item.itemOwner = itemOwner[0];
                item.borrower = borrowerName[0];
                return item;
            });
            let borrowedData = items.map(item => {
                return item;
            });
            if (userId) {
                itemsWithOwners = itemsWithOwners.filter(item => item.itemOwner.id === userId);
                borrowedData = borrowedData.filter(item => item.borrower && item.borrower.id === userId);
            }
            dispatch(loadItems(itemsWithOwners, borrowedData));
        });
    };
}

export function selectFilterItems(filterValues) {
    return {
        type: SELECT_FILTER_ITEMS,
        payload: filterValues
    };
}

// REDUCERS
const initialState = {
    loading: true,
    itemsData: [],
    filterValues: [],
    borrowedData: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS:
            const itemState = {
                ...state,
                loading: false,
                itemsData: action.payload.itemsWithOwners,
                borrowedData: action.payload.borrowedData
            };
            return itemState;
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
