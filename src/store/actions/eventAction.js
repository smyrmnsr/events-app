import apis from "../../api";
import { toast } from "react-toastify";

/* Gets all the events from database */
export const getEvents = () => {
    return (dispatch) => {
        try {
            /* Makes a call to the getEvents endpoint that returns all the events from the database */
            apis.getAllEvents().then((events) => {
                /* dispatch the redux action corresponding to the "get events" */
                dispatch({
                    type: "GET_EVENTS",
                    events
                })
            })
        } catch (e) {
            console.log(e);
        }
    }
}

/* Saves a new event in the database */
export const saveEvent = (newevt) => {
    return (dispatch, getState) => {
        try {
            /* If all the fields are not NULL, data is sent to the endpoint in order to create a new event */
            if(newevt.eventName && newevt.location && newevt.startDate && newevt.endDate) {
                apis.insertEvent(newevt).then((event) => {
                    /* dispatch the redux action corresponding to the "add event" */
                    dispatch({
                        type: "ADD_EVENT",
                        event
                    });

                    toast("Event saved successfully", {
                        position: "bottom-right",
                    });
                });
            } else {
                toast("All fields are required", {
                    position: "bottom-right",
                })
            }
            
        } catch (e) {
            console.log(e);
        }
    }
}

/* Deletes all the events that were created by an user's id */
export const deleteEvents = (userId) => {
    return (dispatch) => {
        try {
            /* Makes and API call to the deleteEvents endpoint with the user's id */
            apis.deleteEvents(userId).then((status) => {
                toast("Events successfully deleted", {
                    position: "bottom-right",
                })
                
                /* dispatch the redux action corresponding to the "delete events" */
                dispatch({
                    type: "DELETE_EVENTS",
                    status
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
}