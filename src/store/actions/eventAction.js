export const getEvents = () => {
    return (dispatch) => {
        try {
            const getEventsFromLocalStorage = async () => {
                let events = JSON.parse(localStorage.getItem("events"));
                if (events === null) 
                    return [];
                return events.sort((a,b) => {
                    return new Date(a.subbmittedAt) - new Date(b.subbmittedAt);
                });
            }

            getEventsFromLocalStorage().then((events) => {
                dispatch({
                    type: "GET_EVENTS",
                    events
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export const saveEvent = (newevt) => {
    return (dispatch, getState) => {
        try {
            const saveDataInLocalStorage = async (event) => {
                try {
                    let events = JSON.parse(localStorage.getItem("events"));
                    if (events === null) events = [];
                    events.push(event);
                    localStorage.setItem("events", JSON.stringify(events));
                    alert("Success");
                    window.location.href = "/";
                    return event;
                } catch (error) {
                    console.log(error);
                }
            }

            saveDataInLocalStorage(newevt).then(
                event => {
                    dispatch({
                        type: "ADD_EVENT",
                        event
                    });
                });
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteEvents = () => {
    return (dispatch) => {
            const deleteDataFromLocalStorage = async () => {
                try {
                    localStorage.removeItem("events");
                    return true;
                } catch (e) {
                    console.log(e);
                    return false;
                }
            }

            deleteDataFromLocalStorage().then((status) => {
                dispatch({
                    type: "DELETE_EVENTS",
                    status
                })
            })
    }
}