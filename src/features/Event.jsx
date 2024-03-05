import calendar from "../assets/calendar.png";
import maps from "../assets/maps.png";
import heartblank from "../assets/heart-blank.png";
import {
  ToasterContainer,
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../components/Toaster";
//import hordots from "../assets/horizontal-dots.png";
import "./event.scss";
import {
  useOptOutOfEventMutation,
  useRegisterForEventMutation,
} from "./events/eventsApi";
import { useState } from "react";
import EventDetails from "./events/EventDetails";
import { createPortal } from "react-dom";
// import { userApi } from "./register/userApi";

const Event = ({ event }) => {
  const [registered, setRegistered] = useState(false);
  const [registerForEvent, { isLoading: isRegistering }] =
    useRegisterForEventMutation();
  const [optOutOfEvent, { isLoading }] = useOptOutOfEventMutation();
  const [openEvent, setOpenEvent] = useState(false);

  const user = JSON.parse(localStorage.getItem("userDetails"));

  const handleOpenEvent = () => {
    setOpenEvent(!openEvent);
  };

  //console.log(event);
  const handleRegister = async () => {
    try {
      LoadingToast();
      const response = await registerForEvent({
        EventID: event.EventID,
        AttendeeID: user.UserID,
      }).unwrap();
      LoadingToast(false);
      console.log("Response: ", response);
      SuccessToast(response.message);

      setRegistered(true);
    } catch (error) {
      LoadingToast(false);
      setRegistered(false);
    }
  };

  const handleOptOut = async () => {
    try {
      LoadingToast();
      const response = await optOutOfEvent(event.EventID, user.UserID).unwrap();
      LoadingToast(false);
      console.log(response);
      SuccessToast(response.message);
      setRegistered(false);
    } catch (error) {
      LoadingToast(false);
      ErrorToast(error.message);
      setRegistered(true);
    }
  };

  return (
    <div className="event-card">
      <ToasterContainer />
      {/* {console.log(event)} */}
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
        <button className="seeMorebtn" onClick={handleOpenEvent}>
          See more
        </button>
      </div>
      <div className="location">
        <img src={maps} alt="no-map" />
        <span>{event.Location}</span>
      </div>
      {console.log("Registered state: ", registered)}
      {registered ? (
        <button className="registr" onClick={handleOptOut}>
          {isLoading ? "Opting out..." : "Opt Out"}
        </button>
      ) : (
        <button className="registr" onClick={handleRegister}>
          {isRegistering ? "Registering" : "Register"}
        </button>
      )}
      {openEvent &&
        createPortal(
          <EventDetails event={event} handleOpenEvent={handleOpenEvent} />,
          document.body
        )}
    </div>
  );
};

export default Event;
