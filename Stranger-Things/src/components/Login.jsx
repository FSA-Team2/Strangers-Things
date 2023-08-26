//Login.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../API-Source/API"; 
import "./Styles-Components/Login.css";

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
    <div id="login">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
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