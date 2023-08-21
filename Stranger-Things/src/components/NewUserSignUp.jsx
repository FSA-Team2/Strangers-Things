import { useState } from "react";
import PropTypes from "prop-types";

const COHORT_NAME = '2302-ACC-PT-WEB-PT-A';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), 
        });

      const result = await response.json();
    

      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }






  return (
    <>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
SignUpForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};