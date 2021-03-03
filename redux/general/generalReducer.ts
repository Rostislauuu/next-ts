import * as types from "./generalActionTypes";

import { ActionInterface } from "../../types/redux/actionInterface";

interface generalInitialState {
    count: number
}

const initialState: generalInitialState = {
    count: 0
};

const generalReducer = (state = initialState, action: ActionInterface) => {
    switch(action.type) {
        case types.INCREASE_COUNT_SUCCESS: 
            return {
                count: state.count + 1
            }   

        case types.DECREASE_COUNT_SUCCESS:
            return {
                count: state.count - 1
            } 

        default: return state
    }
}

export default generalReducer;