const eventReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return action.events;
    case "DELETE_EVENTS":
      return action.status;
    case "ADD_EVENT":
      return [action.event];
    default:
      return state;
  }
};

export default eventReducer;
