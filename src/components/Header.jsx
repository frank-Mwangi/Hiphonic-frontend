import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleForm = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <button onClick={toggleForm} className="edit">
          Edit Profile
        </button>
      </div>

      {isOpen && <form>Form</form>}
    </>
  );
};

export default Header;
