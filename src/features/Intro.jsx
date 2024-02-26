import dots from "../assets/dots.png";
import pin from "../assets/map-pin.png";
import briefcase from "../assets/briefcase.png";
import calendar from "../assets/calendar.png";
import clip from "../assets/link.png";
import "./intro.scss";

const Intro = ({ user }) => {
  user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user);
  return (
    <div className="intro">
      <div className="title">
        <h4>Intro</h4>
        <img src={dots} alt="no-icon" />
      </div>
      <div className="about">
        <p>I am an experienced joiner with well developed skills.</p>
      </div>
      <div className="personal-info">
        <div className="info">
          <img src={pin} alt="" />
          <h4>{user.Location}</h4>
        </div>
        <div className="info">
          <img src={briefcase} alt="" />
          <h4>{user.Company}</h4>
        </div>
        <div className="info">
          <img src={calendar} alt="" />
          <h4>{user.Date}</h4>
        </div>
        <div className="info">
          <img src={clip} alt="" />
          <h4>{user.WebsiteLink}</h4>
        </div>
      </div>
    </div>
  );
};

export default Intro;
