// ACTION CONSTANTS
export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM';
export const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR';
export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';

export function showSignupForm() {
    return {
        type: SHOW_SIGNUP_FORM,
        payload: true
    };
}

export function updateAuthState(userid) {
    return {
        type: UPDATE_AUTH_STATE,
        payload: userid
    };
}

// REDUCERS
const initialState = {
    userProfile: false,
    loginError: false,
    signupForm: false
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_AUTH_STATE:
            return { ...state, userProfile: action.payload };
        case SHOW_SIGNUP_FORM:
            return { ...state, signupForm: action.payload };
        case SHOW_LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        default:
            return state;
    }
}
