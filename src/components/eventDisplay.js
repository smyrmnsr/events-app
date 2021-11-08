import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvents } from "../store/actions/eventAction";

const EventDisplay = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);
    console.log(events);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete ALL your events ?")) {
            dispatch(deleteEvents());
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
                            {event.eventName} | {event.location} | {event.startDate} | {event.endDate} | {event.submittedAt}
                        </li>
                    )
                }) }
            </ul>
            { events && events.data.length > 0 &&
                <button onClick={handleDelete}>
                    Delete All Events
                </button> }
        </>
    )
}

export default EventDisplay;