import apis from "../../api";

export const getEvents = () => {
  return (dispatch) => {
    try {
      apis.getAllEvents().then((events) => {
        dispatch({
          type: "GET_EVENTS",
          events,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const saveEvent = (newevt) => {
  return (dispatch, getState) => {
    try {
      apis.insertEvent(newevt).then((event) => {
        dispatch({
          type: "ADD_EVENT",
          event,
        });

        alert("Event saved successfully");
        window.location.href = "/";
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteEvents = () => {
  return (dispatch) => {
    apis.deleteEvents().then((status) => {
      dispatch({
        type: "DELETE_EVENTS",
        status,
      });
    });
  };
};
