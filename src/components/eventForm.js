import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveEvent } from "../store/actions/eventAction";
import moment from "moment";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const EventForm = () => {
    const [event, setEvent] = useState({
        eventName: "",
        location: "",
        startDate: "",
        endDate: ""
    });

    const [userData, setUserData] = useState({
        uid: "",
        author: "",
        avatar: "",
    })

    // let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("data")).user;

        setUserData({
            uid: user._id,
            author: user.name,
            avatar: user.avatar,
        });
    }, [])

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;
        setEvent({
            ...event,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const submittedAt = moment().format("YYYY-MM-DD h:mm:ss");
            if(moment(event.startDate).isBefore(event.endDate)) {
                dispatch(saveEvent({...event, submittedAt: submittedAt, ...userData}))
            } else {
                toast("An event can't end before it starts", {
                    position: "bottom-right",
                })
            }
            
            // navigate("/");    
        } catch (error) {
            console.log(error);
        }
        
    }

    return (

    <div className="flex items-center justify-center min-h-full px-4 py-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
            <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Add a new event</h2>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="eventName" className="sr-only">
                Event name
                </label>
                <input
                id="eventName"
                name="eventName"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event name"
                value={event.eventName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location" className="sr-only">
                Event location
                </label>
                <input
                id="location"
                name="location"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event location"
                value={event.location}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="startDate" className="sr-only">
                Event starting date
                </label>
                <input
                id="startDate"
                name="startDate"
                type="datetime-local"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event starting date"
                value={event.startDate}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="endDate" className="sr-only">
                Event ending date
                </label>
                <input
                id="endDate"
                name="endDate"
                type="datetime-local"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event ending date"
                value={event.endDate}
                onChange={handleChange}
                />
            </div>
            
            
            </div>

            <div>
            <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md group hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/* <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Add event
            </button>
            </div>
            </form>
        </div>
    </div>
    )
}

export default EventForm;