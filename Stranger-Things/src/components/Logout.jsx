import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Define the handleLogOut function
const handleLogOut = (setToken, navigate) => {
  setToken(null);
  navigate("/login");
};

const Logout = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    handleLogOut(setToken, navigate);
  };

  return (
    <div className="Logout">
      <Navbar token={token} handleLogOut={handleLogOutClick} />

      <button onClick={handleLogOutClick}>Log Out</button>
    </div>
  );
};

Logout.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string,
};


export default Logout;
