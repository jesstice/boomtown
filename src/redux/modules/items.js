// ACTION CONSTANTS
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const FILTER_ITEMS = 'FILTER_ITEMS';

// ACTION CREATORS
export function loadItems(itemsWithOwners) {
    return {
        type: LOAD_ITEMS,
        payload: itemsWithOwners
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
                item.itemOwner = itemOwner[0];
                return item;
            });
            if (userId) {
                itemsWithOwners = itemsWithOwners.filter(item => {
                    return item.itemOwner.id === userId;
                });
            }
            dispatch(loadItems(itemsWithOwners));
        });
    };
}

// export function filterItems() {
//     return {
//         type: FILTER_ITEMS
//     };
// }

// REDUCERS

const initialState = {
    loading: true,
    itemsData: [],
    filterValue: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS:
            const itemState = { loading: false, itemsData: action.payload };
            return itemState;
        // case FILTER_ITEMS:
        //     const filterList = { filterValue: }
        default:
            return state;
    }
}
