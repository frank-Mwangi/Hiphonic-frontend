import "./maincontent.scss";
import Hero from "./Hero";
import Profile from "../pages/Profile";

const MainContent = () => {
  return (
    <div className="maincontent">
      <Hero />
      <Profile />
    </div>
  );
};

export default MainContent;
