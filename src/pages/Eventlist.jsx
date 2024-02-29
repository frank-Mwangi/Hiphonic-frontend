import React from "react";
import { useGetEventsQuery } from "../features/events/eventsApi";
import hordots from "../assets/horizontal-dots.png";
import calendar from "../assets/calendar.png";

import "./eventlist.scss";
import ClipLoader from "react-spinners/ClipLoader";
import Event from "../features/Event";

const Eventlist = () => {
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
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }

  return (
    <div className="event-page">
      <div className="title">
        <h2>Find Event</h2>
        <span>
          <img src={hordots} alt="" />
        </span>
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
        {console.log(events)}
        <h1>Events ndio hizi</h1>;
        {events.forEach((element) => {
          <Event event={element} />;
        })}
      </div>
    </div>
  );
};

export default Eventlist;
