import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./exampleReducer"
import objectReducer from "./exapleObject"
import craftReducer from "./craft"
const rootReducer = combineReducers({
    example: exampleReducer,
    personalData: objectReducer,
    craftItem: craftReducer
});

export default rootReducer;
