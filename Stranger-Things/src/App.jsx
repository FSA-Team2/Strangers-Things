import { useState } from "react";
import "./App.css";
import "./API-Source/API";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/NewUserSignUp";
import Navbar from "./components/NavBar";
import RoutePaths from "./components/RoutesPaths";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/HomePage";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div id="conatiner">
        <Home />
        <RoutePaths />
        <Navbar />
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} />
      </div>
    </>
  );
}

Authenticate.defaultProps = {
  token: null,
};

export default App;
