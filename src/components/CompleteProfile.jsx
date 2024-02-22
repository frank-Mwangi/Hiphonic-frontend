
import "./completeProfile.scss";

const CompleteProfile = () => {
  return (
    <div className="complete-profile">
      <label htmlFor="profile">Complete Your Profile</label>
      <div className="input">
        <input
          type="range"
          name="profile"
          id="profile"
          min={0}
          max={100}
          defaultValue={80}
        />
        <span>80%</span>
      </div>
    </div>
  );
};

export default CompleteProfile;
