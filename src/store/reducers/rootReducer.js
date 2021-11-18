import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

/* Define the state so the different reducers save data on a different key */
const rootReducer = combineReducers({
    events: eventReducer,
    auth: authReducer,
})

export default rootReducer;