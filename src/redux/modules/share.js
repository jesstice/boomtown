// ACTION CONSTANTS
export const UPDATE_STEP_INDEX = 'UPDATE_STEP_INDEX';
export const UPDATE_FINISHED_STATE = 'UPDATE_FINISHED_STATE';

// ACTION CREATORS
export function updateStepIndex(stepIndex) {
    return {
        type: UPDATE_STEP_INDEX,
        payload: stepIndex
    };
}

// REDUCERS
const initialState = {
//   formCompletion: false,
    stepIndex: 0,
    finished: false
};

export function shareReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STEP_INDEX:
            return { ...state, stepIndex: action.payload };
        default:
            return state;
    }
}
