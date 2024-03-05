import React from "react";
import { useGetAttendeesOfEventQuery } from "./eventsApi";
import { LoadingToast } from "../../components/Toaster";
import { PuffLoader } from "react-spinners";
import Event from "../Event";
import avatar from "../../assets/Avatar.png";
import back from "../../assets/back.png";
import "./eventDetails.scss";

const EventDetails = ({ event, handleOpenEvent }) => {
  const {
    data: attendees,
    error,
    isError,
    isLoading,
    isFetching,
  } = useGetAttendeesOfEventQuery(event.EventID);

  console.log(`Attendees: ${attendees},
  Error: ${error},
  isError: ${isError},
  isLoading: ${isLoading},
  isFetching: ${isFetching},`);
  console.log(event);

  if (isLoading || isFetching) {
    LoadingToast();
    return (
      <div>
        <PuffLoader color="#000" loading={true} size={100} />
      </div>
    );
  }
  if (isError || error || attendees.length == 0) {
    LoadingToast(false);
    return <div>Error: {"No attendees found"}</div>;
  }
  return (
    <section className="event-deets">
      {console.log("Event is: ", event)}
      <div className="title">
        <div className="back_img">
          <span onClick={handleOpenEvent}>
            <img src={back} alt="" />
            {/* <p>Back</p> */}
          </span>
        </div>
        <h1>{event.EventName}</h1>
      </div>
      <div className="event-poster">
        <img src={event.EventPosterURL} alt="" />
      </div>
      <div>{event.Description}</div>
      <div className="attendees">
        <h3>Attendees</h3>
        {LoadingToast(false)}
        {attendees &&
          [...attendees]
            .sort((a, b) => a.Username - b.Username)
            .map((attendee) => (
              <ul>
                <li>
                  <img src={avatar} alt="" />
                  <p>{attendee.Username}</p>
                </li>
              </ul>
            ))}
      </div>
    </section>
  );
};

export default EventDetails;
