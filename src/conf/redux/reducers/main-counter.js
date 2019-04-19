import {ADD_TO_MAIN_COUNTER} from "../actions/action-types";

const initialState = {
    totalCount: 0
};

export function mainCounter(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_MAIN_COUNTER:
            let newNum = state.totalCount + action.num;
            return { totalCount: newNum };
        default:
            return state;
    }
}
