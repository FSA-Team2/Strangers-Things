//Register.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isPasswordValid = password.length >= 8;
  const doPasswordsMatch = password === passwordConfirmation;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isPasswordValid) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!doPasswordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setToken(result.data.token);
        navigate("/profile");
      } else {
        setError(result.error.message);
      }
    } catch (error) {
      setError("Error registering user.");
      console.error("Error registering user:", error);
    }
  }

  return (
    <div id="signUp">
      <h2>Sign Up!</h2>
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

        <label>
          Confirm Password:{" "}
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>

        <button type="submit" disabled={!isPasswordValid || !doPasswordsMatch}>
          Submit
        </button>
      </form>
      <Link to="/" className="returnButton">
        <button className="goBack" onClick={() => navigate("/login")}>
          Return
        </button>
      </Link>
    </div>
  );
}

SignUpForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
