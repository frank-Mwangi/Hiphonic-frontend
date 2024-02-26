import { useState } from "react";
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

      {isOpen && (
        <div className="form-container">
          <form action="">
            <input type="text" name="Company" placeholder="Company" />
            <input type="text" name="Date" placeholder="Date" />
            <input type="text" name="Website" placeholder="Website" />
            <button>Save</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;
