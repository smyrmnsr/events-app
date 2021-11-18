const user = JSON.parse(localStorage.getItem("data"));

const eventReducer = (events = [], action) => {
  switch (action.type) {
    case "GET_EVENTS":
      /* return all the events in the state */
      return action.events;
    case "DELETE_EVENTS":
      /* filter the events in the state to exclude the ones created by the current user's id */
      window.location.href =
        "/"; /* used this instead of useNavigate because fhe filter doesnt update the events in the state*/
      return events.data.data.filter((event) => user.user._id !== event.uid);
    case "ADD_EVENT":
      /* saves the created event in the redux state */
      window.location.href =
        "/"; /* used this instead of useNavigate because of an event is not iterable error*/
      return [action.event];
    default:
      /* return the current state */
      return events;
  }
};

export default eventReducer;
