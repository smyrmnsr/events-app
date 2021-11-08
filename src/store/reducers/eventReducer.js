const eventReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_EVENT":
            return [action.event, ...state];
        default:
            return state;
    }
}

export default eventReducer;