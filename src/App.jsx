import "./App.scss";
import Container from "./components/Container";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";

// import Sidebar from "./components/Sidebar";
 import Register from "./components/Register";
// import Profile from "./pages/Profile";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      {/* <Container /> */ }
      
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <div className="app">
            <Container/>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
