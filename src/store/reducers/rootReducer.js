import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    events: eventReducer,
    auth: authReducer,
})

export default rootReducer;