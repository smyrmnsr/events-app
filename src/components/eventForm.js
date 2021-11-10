import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveEvent } from "../store/actions/eventAction";

const EventForm = () => {
  const [event, setEvent] = useState({
    eventName: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [userData, setUserData] = useState({
    uid: "",
    author: "",
    avatar: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data")).user;

    setUserData({
      uid: user._id,
      author: user.name,
      avatar: user.avatar,
    });
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setEvent({
      ...event,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let m = new Date();
      const submittedAt =
        m.getUTCFullYear() +
        "-" +
        ("0" + (m.getUTCMonth() + 1)).slice(-2) +
        "-" +
        ("0" + m.getUTCDate()).slice(-2) +
        " " +
        ("0" + m.getUTCHours()).slice(-2) +
        ":" +
        ("0" + m.getUTCMinutes()).slice(-2) +
        ":" +
        ("0" + m.getUTCSeconds()).slice(-2);

      console.log(userData);

      dispatch(saveEvent({ ...event, submittedAt: submittedAt, ...userData }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            name="eventName"
            type="text"
            value={event.eventName}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            name="location"
            type="text"
            value={event.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            name="startDate"
            type="datetime"
            value={event.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            name="endDate"
            type="datetime"
            value={event.endDate}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default EventForm;
