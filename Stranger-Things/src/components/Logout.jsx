import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Logout = ({ setToken, token }) => {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <div className="Logout">
      <Navbar token={token} handleLogOut={handleLogOutClick} />

      <button id="logOut" onClick={handleLogOutClick}>
        Log Out
      </button>
    </div>
  );
};

Logout.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string,
};

export default Logout;
