
import "./rightSidebar.scss";
import Pages from "./Pages";
import Contacts from "./Contacts";
import Groups from "./Groups";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <Pages />
      <Contacts />
      <Groups />
    </div>
  );
};

export default Rightbar;
