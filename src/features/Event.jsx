import calendar from "../assets/calendar.png";
import maps from "../assets/maps.png";

import heartblank from "../assets/heart-blank.png";
//import hordots from "../assets/horizontal-dots.png";
import "./event.scss";

const Event = ({ event }) => {
  return (
    <div className="event-card">
      {console.log(event)}
      <div className="pic">
        <button className="ui">{event.EventName}</button>
        <span>
          <img src={heartblank} alt="no-icon" />
        </span>
      </div>
      <div className="details">
        <div className="event-details">
          <h1>Event</h1>
          <h4>{event.EventName}</h4>
          <p>{event.Description}</p>
        </div>
        <button>
          <img src={calendar} alt="no-icon" />
          <h3>{event.EventDate}</h3>
        </button>
      </div>
      <div className="cascaded-images">
        <p>+2K are going</p>
      </div>
      <div className="location">
        <img src={maps} alt="no-map" />
        <span>{event.Location}</span>
      </div>
      <button className="registr">Register</button>
    </div>
  );
};

export default Event;
