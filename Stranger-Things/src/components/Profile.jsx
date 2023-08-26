//Profile.jsx
import PropTypes from "eslint-plugin-react/lib/rules/prop-types";
import { useState, useEffect } from "react";
import { BASE_URL } from "../API-Source/API";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import "./Styles-Components/Profile.css";

export default function Profile({ token }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.ok) {
          setUserData(result.data);
        } else {
          setError(result.error.message);
        }
      } catch (error) {
        setError("Error fetching user data.");
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [token, navigate]);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <Navbar token={token} username={userData?.username} /> {/* Pass token and username */}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          {/* Display other user data fields here */}
        </div>
      )}
    </div>
  );
}
Profile.propTypes = {
  token: PropTypes.string.isRequired,
};