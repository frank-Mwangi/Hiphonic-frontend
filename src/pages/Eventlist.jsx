import React from "react";
import { createPortal } from "react-dom";
import { useGetEventsQuery } from "../features/events/eventsApi";
import hordots from "../assets/horizontal-dots.png";
import calendar from "../assets/calendar.png";
import { LoadingToast, SuccessToast, ErrorToast } from "../components/Toaster";
import "./eventlist.scss";
import ClipLoader from "react-spinners/ClipLoader";
import Event from "../features/Event";
import { useState } from "react";
import CreateEvent from "../features/events/CreateEvent";

const Eventlist = () => {
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const {
    data: events,
    error,
    isError,
    isLoading,
    isFetching,
  } = useGetEventsQuery();

  console.log(
    `Events: ${events}, Error: ${error}, isError: ${isError}, isLoading: ${isLoading}, isFetching: ${isFetching}`
  );

  if (isLoading || isFetching) {
    return LoadingToast();
    // return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    ErrorToast(error.data.message);
    return <div>Error: {error.data.message}</div>;
  }
  //   [...events].sort((a, b) => {
  //     b.id - a.id;
  //   });
  return (
    <div className="event-page">
      <div className="title">
        <h2>Find Event</h2>
        <span
          onClick={() => {
            setShowButton(!showButton);
          }}
        >
          <img src={hordots} alt="" />
        </span>
        {showButton && (
          <div className="buttons">
            <button
              onClick={() => {
                setShowForm((prevState) => !prevState);
              }}
            >
              {showForm ? "Close Form" : "Create Event"}
            </button>
          </div>
        )}
      </div>
      <div className="categories">
        <li>
          <ul>Popular</ul>
          <ul>For You</ul>
          <ul>Nearest</ul>
          <ul>Favorite</ul>
          <ul>Registered</ul>
        </li>
        <span>
          <img src={calendar} alt="no-icon" />
          <h5>November</h5>
        </span>
      </div>
      <div className="cards">
        {console.log(showForm)}
        {showForm &&
          createPortal(
            <CreateEvent setShowForm={setShowForm} />,
            document.body
          )}
        {events &&
          [...events]
            .sort((a, b) => b.EventID - a.EventID)
            .map((element, index) => <Event key={index} event={element} />)}
        {LoadingToast(false)}
      </div>
    </div>
  );
};

export default Eventlist;
