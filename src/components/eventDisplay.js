import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvents } from "../store/actions/eventAction";

const EventDisplay = () => {
  const avatarStyle = {
    width: "60px",
  };

  const enabledClass = {
    backgroundColor: "#e6ffe7",
  };

  const disabledClass = {
    backgroundColor: "#ffe6e6",
  };

  /* Store the current user */
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  /* Get events from Redux state */
  const events = useSelector((state) => state.events.data);

  /* Check if user is authenticated */
  const isAuthenticated = localStorage.getItem("token") !== null;

  /* Checks if the authenticated user has any events */
  const checkForLoggedUserEvents = () => {
    let userHasEvents = false;

    if (isAuthenticated) {
      if (events && events.data.length > 0) {
        events.data.forEach((data) => {
          if (data.uid === user.user._id) {
            userHasEvents = true;
          }
        });
      }
    }
    return userHasEvents;
  };

  useEffect(() => {
    /* Dispatches the getEvents function from Redux on component render, after that, the events will be available in the Redux state.events */
    dispatch(getEvents());

    if (isAuthenticated) {
      setUser(JSON.parse(localStorage.getItem("data")));
    }
  }, [dispatch, isAuthenticated]);

  
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete ALL your events ?")) {
      /* Gets the user form localstorage */
      const userData = JSON.parse(localStorage.getItem("data"));
      /* dispatches the deleteEvents function from Redux that deletes all the logged user's events */
      dispatch(deleteEvents({ uid: userData.user._id }));
    }
  };

  return (
    <>
      <div className="flex flex-col mt-2">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden text-left text-black border-gray-600 border-solid shadow sm:rounded-lg">
              <div>
                <h2>
                  {events && events.data.length > 0
                    ? "Events"
                    : "There are no events yet."}
                </h2>
              </div>
              {events && events.data.length > 0 && (
                <table className="min-w-full text-sm divide-y divide-gray-200">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Organiser
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Event name
                      </th>
                      <th
                        scope="col"
                        className="py-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Starting date
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Ending date
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase px-11"
                      >
                        Submitted at
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-black bg-white divide-y divide-gray-200">
                    {/* Returns a new line in the table for each event */}
                    {events.data.map((event, index) => {
                      return (
                        <tr
                          key={index}
                          style={event.active ? enabledClass : disabledClass}
                        >
                          <td className="flex items-center justify-center">
                            {event.avatar.includes("base64") && (
                              <img
                                alt="#"
                                style={avatarStyle}
                                src={event.avatar.substring(
                                  1,
                                  event.avatar.length - 1
                                )}
                              />
                            )}
                          </td>
                          <td>{event.eventName}</td>
                          <td>{event.location}</td>
                          <td>{event.startDate.replace("T", " ")}</td>
                          <td>{event.endDate.replace("T", " ")}</td>
                          <td>{event.submittedAt}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex items-center justify-end">
              {/* If the user is logged, display the delete events button */}
              {checkForLoggedUserEvents() && (
                <button
                  className="px-4 py-2 mt-2 text-sm font-bold text-white bg-gray-800 rounded hover:bg-gray-600"
                  onClick={handleDelete}
                >
                  Delete Your Events
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDisplay;
