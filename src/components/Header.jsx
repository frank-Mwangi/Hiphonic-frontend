import { useState } from "react";
import "./header.scss";
import UpdateProfile from "../features/profile/UpdateProfile";
import { createPortal } from "react-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("userDetails"));

  // const toggleForm = () => {
  //   setIsOpen(!isOpen);
  //   console.log("Button clicked");
  // };

  return (
    <>
      <div className="header">
        <button onClick={() => setIsOpen(!isOpen)} className="edit">
          Edit Profile
        </button>
        {isOpen &&
          createPortal(
            <UpdateProfile user={user} onClose={() => setIsOpen(false)} />,
            document.body
          )}
      </div>
    </>
  );
};

export default Header;
