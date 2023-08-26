//RoutesPath.jsx

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./HomePage";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./NavBar";
import SignUpForm from "./Register";
import Authenticate from "./Authenticate";
import CreatePost from "./CreatePost";
import "./RoutesPaths.css";

const RoutePaths = () => {
  const [token, setToken] = useState(null);

  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home setToken={setToken} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/register" element={<SignUpForm setToken={setToken} />} />
        <Route path="/authenticate" element={<Authenticate token={token} />} />
        <Route
          path="/create-post"
          element={token ? <CreatePost token={token} /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default RoutePaths;