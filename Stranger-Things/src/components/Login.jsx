//Login.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../API-Source/API";
import "./Login.css";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await loginUser(username, password);

      if (result.success) {
        setToken(result.data.token);
        navigate("/profile");
      } else {
        setError(result.error.message);
      }
    } catch (error) {
      setError("Error logging in.");
      console.error("Error logging in:", error);
    }
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="user-box">
         
          <input
            type="text"
            name=""
            required=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <label>Username: </label>
        </div>
        <div className="user-box">
          
          <input
            type="password"
            name=""
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
          <label>Password: </label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button type="submit">Submit</button>
        </a>
      </form>
      <Link to="/" className="returnButton">
        <button className="goBack" onClick={() => navigate("/profile")}>
          Return
        </button>
      </Link>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
