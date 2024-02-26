import { useEffect, useState } from "react";
import "./App.scss";
import Container from "./components/Container";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
// import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token is ", token);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (token != null) {
      setAuth(true);
    }
  }, [token]);

  console.log(auth);

  return (
    <>
      {/* <Container /> */}

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {auth ? (
          <Route
            path="/*"
            element={
              <div className="app">
                <Container />
              </div>
            }
          />
        ) : (
          navigate("/login")
        )}
      </Routes>
    </>
  );
}

export default App;
