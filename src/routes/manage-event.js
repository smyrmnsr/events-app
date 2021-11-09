import React, { useEffect } from "react"
import EventForm from "../components/eventForm";

const ManageEvent = () => {

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token") !== null;
        if(!isAuthenticated) {
            window.location.href = "/login";
        }
    })

    return (
        <EventForm />
    )
}

export default ManageEvent;