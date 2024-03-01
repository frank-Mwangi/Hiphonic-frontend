import React from "react";

const RecentActivity = ({ groups }) => {
  return (
    <div className="recent-activity">
      <span>
        <h4>Recent Activity</h4>
      </span>
      <div className="ra-body">
        <div className="handle">
          {/* <img src={avatar} alt="no-icon" /> */}
          <div className="handle-details">
            <h4>Design Enthusiast </h4>
            <span>
              <p>Angela Lee</p>
              {/* <img src={dot} alt="" /> */}
              <p>56 mins ago</p>
            </span>
          </div>
        </div>
        <div className="post-body">
          <p>This is the story of a girl. Who cried a river and drowned the whole world. Why does she look so sad in photographs?</p>
        </div>
        <div className="images">
          {/* <img src={group3} alt="" />
            <img src={group4} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
