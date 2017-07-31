// ACTION CONSTANTS
export const UPDATE_STEP_INDEX = 'UPDATE_STEP_INDEX';
export const COMPLETE_SIGNUP_FORM = 'COMPLETE_SIGNUP_FORM';
export const SET_ITEM_IMAGE_URL = 'SET_ITEM_IMAGE_URL';

// ACTION CREATORS
export function updateStepIndex(stepIndex) {
    return {
        type: UPDATE_STEP_INDEX,
        payload: stepIndex
    };
}

export function setItemImageUrl(url) {
    return {
        type: SET_ITEM_IMAGE_URL,
        payload: url
    };
}

export function completeSignupForm(bool) {
    return {
        type: COMPLETE_SIGNUP_FORM,
        payload: bool
    };
}

export function resetShareForm() {
    return (dispatch) => {
        dispatch(updateStepIndex(0));
        dispatch(completeSignupForm(false));
    };
}

// REDUCERS
const initialState = {
    stepIndex: 0,
    finished: false,
    imageurl: ''
};

export function shareReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STEP_INDEX:
            return { ...state, stepIndex: action.payload };
         case SET_ITEM_IMAGE_URL:
            return { ...state, imageurl: action.payload };
        case COMPLETE_SIGNUP_FORM:
            return { ...state, finished: action.payload };
        default:
            return state;
    }
}
