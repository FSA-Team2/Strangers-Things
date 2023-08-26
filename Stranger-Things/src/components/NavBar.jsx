//NavBar.jsx
import PropTypes from "eslint-plugin-react/lib/rules/prop-types";
import { Link } from "react-router-dom";
import "./Styles-Components/NavBar.css";

const Navbar = ({ token, handleLogOut }) => {
  return (
    <div id="navbar">
      <nav id="navlinks">
        <ul id="navUl" style={{ listStyle: "none", padding: 5 }}>
          <li id="homeLink">
            <Link to="/" className="homeLink">
              Home
            </Link>
          </li>
          <li id="postsLink">
            <Link to="/posts" className="postsLink">
              Posts
            </Link>
          </li>
          {token ? (
            <>
              <li id="profileLink">
                <Link to="/profile" className="profileLink">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li id="loginLink">
                <Link to="/login" className="loginLink">
                  Login
                </Link>
              </li>
              <li id="registerLink">
                <Link to="/register" className="registerLink">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  token: PropTypes.string.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  };

export default Navbar;