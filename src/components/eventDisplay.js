import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvents } from "../store/actions/eventAction";

const EventDisplay = () => {

    const avatarStyle = {
        width: "30px",
        height: "30px"
    }

    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);
    console.log(events);
    const isAuthenticated = localStorage.getItem("token") !== null;

    useEffect(() => {
        dispatch(getEvents());
    }, [])

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete ALL your events ?")) {
            const userData = JSON.parse(localStorage.getItem("data"));
            dispatch(deleteEvents({uid: userData.user._id}));
        }
    }

    return (
        <>
            { events && events.data.length > 0 ? "Events" : "There are no events yet."}
            <ul>
            { events && events.data.length > 0 && 
                events.data.map((event, index) => {
                    return (
                        <li key={index}>
                            {event.avatar.includes("base64") && <img style={avatarStyle} src={event.avatar.substring(1, event.avatar.length-1)}/>} 
                            {event.eventName} | {event.location} | {event.startDate} | {event.endDate} | {event.submittedAt}
                        </li>
                    )
                }) }
            </ul>
            { isAuthenticated && events && events.data.length > 0 &&
                <button onClick={handleDelete}>
                    Delete Your Events
                </button> }
        </>
    )
}

export default EventDisplay;