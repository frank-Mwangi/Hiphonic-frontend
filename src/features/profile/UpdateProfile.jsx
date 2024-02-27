import { useState } from "react";
import { useUpdateUserMutation } from "../register/userApi";
import "./updateProfile.scss";

const UpdateProfile = ({ onClose, user }) => {
  // console.log(user);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const token = localStorage.getItem("token");
  console.log(token);
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
    console.log("Edited Profile: ", editedProfile);
    console.log("token is ", token);
    updateUser(
      {
        ...editedProfile,
        token,
      }

      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     authorization: `JWT ${token}`,
      //   },
      // }
    );
    localStorage.setItem("userDetails", JSON.stringify(editedProfile));
    e.target.reset();
    alert("Edit successful. Please log in again to see the changes.");
    onClose();
    // }
  };
  return (
    <section className="form-container">
      <div className="modal">
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
            <input
              type="text"
              id="Email"
              name="Email"
              value={editedProfile.Email}
              onChange={handleChange}
            />
          </label>
          <label className="form-input" htmlFor="TagName">
            TagName:
            <input
              type="text"
              id="TagName"
              name="TagName"
              value={editedProfile.TagName}
              onChange={handleChange}
            />
          </label>
          <label className="form-input" htmlFor="Location">
            Location:
            <input
              type="text"
              id="Location"
              name="Location"
              value={editedProfile.Location}
              onChange={handleChange}
            />
          </label>
          <label className="form-input" htmlFor="Company">
            Company:
            <input
              type="text"
              id="Company"
              name="Company"
              value={editedProfile.Company || ""}
              onChange={handleChange}
            />
          </label>
          <label className="form-input" htmlFor="WebsiteLink">
            WebsiteLink:
            <input
              type="text"
              id="WebsiteLink"
              name="WebsiteLink"
              value={editedProfile.WebsiteLink || ""}
              onChange={handleChange}
            />
          </label>
          <button type="submit">
            {isLoading ? "Loading" : "Save Profile"}
          </button>
          <button onClick={onClose}>Close Modal</button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
