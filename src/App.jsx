import { useEffect, useState } from "react";
import "./App.scss";
import Container from "./components/Container";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";

import { io } from "socket.io-client";
import { SocketProvider } from "./socketContext.jsx";

import RegisterNew from "./components/RegisterNew";
//import { useNavigate } from "react-router-dom";


function App() {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(token !== null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:5000");
    setSocket(newSocket);

    // Emit newUser event when socket connection is established
    newSocket.emit("newUser");

    return () => {
      newSocket.disconnect(); // Clean up socket connection when component unmounts
    };
  }, []);

  useEffect(() => {
    if (token != null) {
      setAuth(true);
    }
  }, []);

  return (
    <SocketProvider socket={socket}>
      <Routes>
        <Route path="/" element={<RegisterNew />} />
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
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </SocketProvider>
  );
}

export default App;
