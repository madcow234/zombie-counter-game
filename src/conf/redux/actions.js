import {ADD_TO_MAIN_COUNTER} from "./action-types";

export let addToMainCounter = (num) => {
    return { type: ADD_TO_MAIN_COUNTER, num }
};