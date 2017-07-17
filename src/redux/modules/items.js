// ACTION CONSTANTS
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_FILTER_ITEMS = 'LOAD_FILTER_ITEMS';
export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';
export const GET_BORROWED_ITEMS = 'GET_BORROWED_ITEMS';

// ACTION CREATORS
export function loadItems(itemsWithOwners, borrowedItems) {
    return {
        type: LOAD_ITEMS,
        payload: {
            itemsWithOwners,
            borrowedItems
        }
    };
}

export function getBorrowedItems(borrowedItems) {
    return {
        type: GET_BORROWED_ITEMS,
        payload: borrowedItems
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
            let borrowedItems = items.map(item => {
                return item;
            });
            if (userId) {
                itemsWithOwners = itemsWithOwners.filter(item => item.itemOwner.id === userId);
                borrowedItems = borrowedItems.filter(item => item.borrower && item.borrower.id === userId);
            }
            dispatch(loadItems(itemsWithOwners, borrowedItems));
        });
    };
}

export function selectFilterItems(filterValues) {
    return {
        type: SELECT_FILTER_ITEMS,
        payload: filterValues
    };
}

export function filterItemsData(itemsData, filterValues) {
    const filteredItems = itemsData.filter((itemData) => filterValues.filter(filterValue => itemData.tags === filterValue));
    return filteredItems;
}

export function loadFilterItems(filteredItemsData) {
    return {
        type: LOAD_FILTER_ITEMS,
        payload: filteredItemsData
    };
}

// REDUCERS

const initialState = {
    loading: true,
    itemsData: [],
    filteredItemsData: [],
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
        case LOAD_FILTER_ITEMS:
            const filteredState = {
                ...state,
                filteredItemsData: action.payload
            }
        default:
            return state;
    }
}
