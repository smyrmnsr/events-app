import apis from "../../api";
import { toast } from "react-toastify";

export const getEvents = () => {
    return (dispatch) => {
        try {
            apis.getAllEvents().then((events) => {
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

export const saveEvent = (newevt) => {
    return (dispatch, getState) => {
        try {
            if(newevt.eventName && newevt.location && newevt.startDate && newevt.endDate) {
                apis.insertEvent(newevt).then((event) => {
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

export const deleteEvents = (userId) => {
    return (dispatch) => {
        try {
            apis.deleteEvents(userId).then((status) => {
                toast("Events successfully deleted", {
                    position: "bottom-right",
                })

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