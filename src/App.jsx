import "./App.scss";
import Navbar from "./components/Navbar";
import Rightbar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
// import Register from "./components/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* <Register /> */}
      {/* <Profile /> */}
      <Navbar />
      <Sidebar />
      <Rightbar />
    </>
  );
}

export default App;
