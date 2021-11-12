import React, { useEffect } from "react"
import EventForm from "../components/eventForm";
import NavBar from "../components/navigation/nav";

const ManageEvent = () => {

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token") !== null;
        if(!isAuthenticated) {
            window.location.href = "/login";
        }
    })

    return (
        <>
            <NavBar />
            <EventForm />
        </>
    )
}

export default ManageEvent;