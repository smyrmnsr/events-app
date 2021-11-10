const user = JSON.parse(localStorage.getItem("data"));

const eventReducer = (events = [], action) => {
    switch(action.type) {
        case "GET_EVENTS":
            return action.events;
        case "DELETE_EVENTS":
            return events.data.data.filter((event) => user.user._id !== event.uid);
        case "ADD_EVENT":
            return [action.event];
        default:
            return events;
    }
}

export default eventReducer;