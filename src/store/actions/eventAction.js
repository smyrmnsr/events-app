export const saveEvent = (newevt) => {
  return (dispatch, getState) => {
    try {
      const saveDataInLocalStorage = async (event) => {
        try {
          let events = JSON.parse(localStorage.getItem("events"));
          if (events == null) events = [];
          events.push(event);
          localStorage.setItem("events", JSON.stringify(events));
          alert("Success");
          window.location.href = "/";
          return event;
        } catch (error) {
          console.log(error);
        }
      };

      saveDataInLocalStorage(newevt).then((event) => {
        dispatch({
          type: "ADD_EVENT",
          event,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};
