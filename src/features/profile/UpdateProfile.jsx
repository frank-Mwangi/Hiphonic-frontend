import { useState } from "react";
import { useUpdateUserMutation } from "../register/userApi";
import "./updateProfile.scss";

const UpdateProfile = ({ onClose, user }) => {
  console.log("Portal opens");
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const [editedProfile, setEditedProfile] = useState({
    ...user,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => {
      return { ...prevProfile, [name]: value };
    });
  };
  // console.log(" profile (in update profile ) -> " + JSON.stringify(user));

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (e.target[0].value === "" || e.target[1].value === "") {
    //   alert("Please fill in all fields");
    // } else {
    updateProfile({
      ...editedProfile,
    });
    e.target.reset();
    //}
  };
  return (
    <section className="form-container">
      <h2> Edit your Profile </h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="Username">
          Username:
          <input
            type="text"
            id="Username"
            name="Username"
            value={editedProfile.Username}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="Email">
          Email:
          <textarea
            id="Email"
            name="Email"
            value={editedProfile.Email}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="TagName">
          TagName:
          <textarea
            id="TagName"
            name="TagName"
            value={editedProfile.TagName}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="Location">
          Location:
          <textarea
            id="Location"
            name="Location"
            value={editedProfile.Location}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="Company">
          Company:
          <textarea
            id="Company"
            name="Company"
            value={editedProfile.Company || ""}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="WebsiteLink">
          WebsiteLink:
          <textarea
            id="WebsiteLink"
            name="WebsiteLink"
            value={editedProfile.WebsiteLink || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save Profile"}</button>
        <button onClick={onClose}>Close Modal</button>
      </form>
    </section>
  );
};

export default UpdateProfile;
