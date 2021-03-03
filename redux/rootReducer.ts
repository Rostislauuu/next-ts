import { combineReducers } from "redux";

import general from "./general/generalReducer"; 

const rootReducer = combineReducers({
    general
});

export default rootReducer;