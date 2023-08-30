//Authenticate.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import "./Authenticate.css";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token.trim()}`;
      }

      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: "GET",
        headers: headers,
      });

      const result = await response.json();
      console.log(result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError("Error while authenticating token.");
      console.error("Error authenticating token:", error);
    }
  }

  return (
    <div>
    {/* //   <h2>Authenticate!</h2> */}
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button className="authenticateButton" onClick={handleClick}>
        Authenticate
      </button>
    </div>
  );
}

Authenticate.propTypes = {
  token: PropTypes.string,
};

Authenticate.defaultProps = {
  token: null,
};