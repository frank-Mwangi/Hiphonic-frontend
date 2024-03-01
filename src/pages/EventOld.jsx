import calendar from "../assets/calendar.png";
import maps from "../assets/maps.png";

import heartblank from "../assets/heart-blank.png";
import hordots from "../assets/horizontal-dots.png";
import "./event.scss";

const Event = ({ event }) => {
  console.log("In Event component:", event);
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
        <div className="card">
          <div className="pic one">
            <button className="ui">{event.EventName}</button>
            <span>
              <img src={heartblank} alt="no-icon" />
            </span>
          </div>
          <div className="details">
            <div className="event-details">
              <h4>National Seminar</h4>
              <p>By Emma Stone</p>
            </div>
            <button>
              <img src={calendar} alt="no-icon" />
              <h3>16 Nov, 2022</h3>
            </button>
          </div>
          <div className="cascaded-images">
            <p>+2K are going</p>
          </div>
          <div className="location">
            <img src={maps} alt="no-map" />
            <span>
              4517 Manchester Ave. Manchester,
              <br /> Kentucky 39495
            </span>
          </div>
          <button className="registr">Register</button>
        </div>
        <div className="card">
          <div className="pic two">
            <button className="ui">Pottery</button>
            <span>
              <img src={heartblank} alt="no-icon" />
            </span>
          </div>
          <div className="details">
            <div className="event-details">
              <h4>Pottery Workshop</h4>
              <p>By Emma Stone</p>
            </div>
            <button>
              <img src={calendar} alt="no-icon" />
              <h3>16 Nov, 2022</h3>
            </button>
          </div>
          <div className="cascaded-images">
            <p>+2K are going</p>
          </div>
          <div className="location">
            <img src={maps} alt="no-map" />
            <span>
              4517 Manchester Ave. Manchester,
              <br /> Kentucky 39495
            </span>
          </div>
          <button className="registr">Register</button>
        </div>
        <div className="card">
          <div className="pic three">
            <button className="ui">Concert</button>
            <span>
              <img src={heartblank} alt="no-icon" />
            </span>
          </div>
          <div className="details">
            <div className="event-details">
              <h4>Up Summer Concert</h4>
              <p>By Emma Stone</p>
            </div>
            <button>
              <img src={calendar} alt="no-icon" />
              <h3>16 Nov, 2022</h3>
            </button>
          </div>
          <div className="cascaded-images">
            <p>+2K are going</p>
          </div>
          <div className="location">
            <img src={maps} alt="no-map" />
            <span>
              4517 Manchester Ave. Manchester,
              <br /> Kentucky 39495
            </span>
          </div>
          <button className="registr">Register</button>
        </div>
        <div className="card">
          <div className="pic four">
            <button className="ui">Painting</button>
            <span>
              <img src={heartblank} alt="no-icon" />
            </span>
          </div>
          <div className="details">
            <div className="event-details">
              <h4>Painting Workshop</h4>
              <p>By Emma Stone</p>
            </div>
            <button>
              <img src={calendar} alt="no-icon" />
              <h3>16 Nov, 2022</h3>
            </button>
          </div>
          <div className="cascaded-images">
            <p>+2K are going</p>
          </div>
          <div className="location">
            <img src={maps} alt="no-map" />
            <span>
              4517 Manchester Ave. Manchester,
              <br /> Kentucky 39495
            </span>
          </div>
          <button className="registr">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
