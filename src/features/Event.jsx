import calendar from "../assets/calendar.png";
import maps from "../assets/maps.png";
import heartblank from "../assets/heart-blank.png";
//import hordots from "../assets/horizontal-dots.png";
import "./event.scss";
import {
  useOptOutOfEventMutation,
  useRegisterForEventMutation,
} from "./events/eventsApi";
import { useState } from "react";
// import { userApi } from "./register/userApi";

const Event = ({ event }) => {
  const [registered, setRegistered] = useState(false);
  const [registerForEvent, { isLoading: isRegistering }] =
    useRegisterForEventMutation();
  const [optOutOfEvent, { isLoading }] = useOptOutOfEventMutation();

  const user = JSON.parse(localStorage.getItem("userDetails"));

  console.log(event);
  const handleRegister = async () => {
    const response = await registerForEvent({
      EventID: event.EventID,
      AttendeeID: user.UserID,
    }).unwrap();
    console.log("Response: ", response);
    if (response.status == "success") {
      setRegistered(true);
    }
  };

  const handleOptOut = async () => {
    const response = await optOutOfEvent(event.EventID, user.UserID).unwrap();
    if (response.status == "success") {
      console.log(response);
      setRegistered(false);
    }
  };

  return (
    <div className="event-card">
      {console.log(event)}
      <div className="pic">
        <div className="buttons">
          <button className="ui">{event.EventName}</button>

          <span>
            <img src={heartblank} alt="no-icon" />
          </span>
        </div>
        <img className="poster" src={event.EventPosterURL} />
      </div>
      <div className="details">
        <div className="event-details">
          <h4>{event.EventName}</h4>
          <p>{event.Description}</p>
        </div>
        <button>
          <img src={calendar} alt="no-icon" />
          <h3>{event.EventDate.substring(0, event.EventDate.indexOf("T"))}</h3>
        </button>
      </div>
      <div className="cascaded-images">
        <p>+2K are going</p>
      </div>
      <div className="location">
        <img src={maps} alt="no-map" />
        <span>{event.Location}</span>
      </div>
      {registered ? (
        <button className="registr" onClick={handleOptOut}>
          {isLoading ? "Opting out..." : "Opt Out"}
        </button>
      ) : (
        <button className="registr" onClick={handleRegister}>
          {isRegistering ? "Registering" : "Register"}
        </button>
      )}
    </div>
  );
};

export default Event;
