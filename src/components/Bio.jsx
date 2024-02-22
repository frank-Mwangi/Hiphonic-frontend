
import "./bio.scss";

const Bio = () => {
  return (
    <div className="bio">
      <div className="handle">
        <h2>Kaiser Soze</h2>
        <p>@K.soze</p>
      </div>
      <div className="biodeets">
        <div className="bio-info">
          <h4>POSTS</h4>
          <p>683</p>
        </div>
        <div className="bio-info">
          <h4>FRIENDS</h4>
          <p>5.7K</p>
        </div>
        <div className="bio-info">
          <h4>PHOTOS</h4>
          <p>296</p>
        </div>
        <div className="likes bio-info">
          <h4>LIKES</h4>
          <p>10.7K</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
