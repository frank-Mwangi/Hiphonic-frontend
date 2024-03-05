import search from "../assets/search.png";
import plus from "../assets/plus.png";
// import group1 from "../assets/group(1).png";
// import group2 from "../assets/group(2).png";
// import group3 from "../assets/group(3).png";
// import group4 from "../assets/group(4).png";
// import dots from "../assets/vertical-dots.png";
// import avatar from "../assets/Avatar (9).png";
import "./groupsTop.scss";
// import UD from "../assets/Avatar (10).png";
// import UI from "../assets/Avatar (11).png";
// import dot from "../assets/dot.png";
import CreateGroup from "../features/groups/CreateGroup";
// import { createPortal } from "react-dom";
import { useState } from "react";
import GroupLists from "../features/groups/GroupLists";

const GroupsTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="groups-page">
      {isOpen && <CreateGroup onClose={() => setIsOpen(false)} />}

      <div className="top">
        <div className="title">
          <h1>Groups</h1>
          <div className="buttons">
            <span>
              <input type="text" className="search" placeholder="Search..." />
              <img src={search} alt="" />
            </span>
            <button
              onClick={() => {
                console.log("click");
                setIsOpen(!isOpen);
              }}
            >
              <img src={plus} alt="no-icon" />
              Create New Group
            </button>
          </div>
        </div>

        <div className="suggested">
          <div className="text">
            <h4>Suggested for you</h4>
            <p>Groups you might be interested in.</p>
          </div>
          <span>See All</span>
        </div>
      </div>

      <>
        <GroupLists />
      </>

      {/* <div className="images">
        <div className="card">
          <div className="details">
            <div className="details-left">
              <span className="logo">
                <img src={UD} alt="no-icon" />
              </span>
              <div className="group-name">
                <h4>UI/UX Designer</h4>
                <span>
                  <p>Bandung </p>
                  <img src={dot} alt="" />
                  <p> 7 posts a day</p>
                </span>
              </div>
            </div>
            <span>
              <img src={dots} alt="" />
            </span>
          </div>
          <div className="image">
            <img src={group1} alt="" />
          </div>
          <div className="bottom">
            <button>Join Group</button>
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="details-left">
              <span className="logo">
                <img src={UI} alt="no-icon" />
              </span>
              <div className="group-name">
                <h4>User Interface</h4>
                <span>
                  <p>Jakarta </p>
                  <img src={dot} alt="" />
                  <p> 7 posts a day</p>
                </span>
              </div>
            </div>
            <span>
              <img src={dots} alt="" />
            </span>
          </div>
          <div className="image">
            <img src={group2} alt="" />
          </div>
          <div className="bottom">
            <button>Join Group</button>
          </div>
        </div>
      </div> */}
      {/* <div className="recent-activity">
        <span>
          <h4>Recent Activity</h4>
        </span>
        <div className="ra-body">
          <div className="handle">
            <img src={avatar} alt="no-icon" />
            <div className="handle-details">
              <h4>Design Enthusiast</h4>
              <span>
                <p>Angela Lee</p>
                <img src={dot} alt="" />
                <p>56 mins ago</p>
              </span>
            </div>
          </div>
          <div className="post-body">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented early on.
            </p>
          </div>
          <div className="images">
            <img src={group3} alt="" />
            <img src={group4} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GroupsTop;
