import {ADD_TO_MAIN_COUNTER} from "./action-types";

const initialState = {
    totalCount: 0
};

let rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MAIN_COUNTER:
            console.log("test");
            let newNum = state.totalCount + action.num;
            return { totalCount: newNum };
        default:
            return state;
    }
};

export default rootReducer;