// import dots from "../assets/vertical-dots.png";
// import avatar from "../assets/Avatar (9).png";
// import "./groupsTop.scss";
// import UD from "../assets/Avatar (10).png";
// import dot from "../assets/dot.png";

const Group = ({ group }) => {
  return (
    <div>
      <div className="card">
        <div className="details">
          <div className="details-left">
            <span className="logo">{/* <img src={UD} alt="no-icon" /> */}</span>
            <div className="group-name">
              <h4>UI/UX Designer</h4>
              <span>
                <p>Bandung </p>
                {/* <img src={dot} alt="" /> */}
                <p> 7 posts a day</p>
              </span>
            </div>
          </div>
          <span>
            {/* <img src={dots} alt="" /> */}
          </span>
        </div>
        <div className="image">
          {/* <img src={group1} alt="" /> */}
        </div>
        <div className="bottom">
          <button>Join Group</button>
        </div>
      </div>
      <div className="recent-activity">
        <span>
          <h4>Recent Activity</h4>
        </span>
        <div className="ra-body">
          <div className="handle">
            {/* <img src={avatar} alt="no-icon" /> */}
            <div className="handle-details">
              <h4>{group.GroupName}</h4>
              <span>
                <p>Angela Lee</p>
                {/* <img src={dot} alt="" /> */}
                <p>56 mins ago</p>
              </span>
            </div>
          </div>
          <div className="post-body">
            <p>{group.Description}</p>
          </div>
          <div className="images">
            {/* <img src={group3} alt="" />
            <img src={group4} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
