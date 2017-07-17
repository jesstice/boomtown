// ACTION CONSTANTS
export const LOAD_USER_DATA = 'LOAD_USER_DATA';

// ACTION CREATORS
export function loadUserData(singleUserData) {
    return {
        type: LOAD_USER_DATA,
        payload: singleUserData
    };
}

export function getUserData(userId) {
    return function (dispatch) {
        fetch(`http://localhost:3001/users/${userId}`)
            .then(response => response.json())
            .then(singleUserData => {
                dispatch(loadUserData(singleUserData));
            });
    };
}

// REDUCERS
const initialState = {
    loading: true,
    userData: []
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DATA:
            const userState = { loading: false, userData: action.payload };
            return userState;
        default:
            return state;
    }
}
