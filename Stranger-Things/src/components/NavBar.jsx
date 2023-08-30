//NavBar.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = ({ token }) => {
  return (
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
              <Link to="/logout" className="logoutLink">
                Log Out
              </Link>
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
  );
};
Navbar.propTypes = {
  token: PropTypes.string,
  handleLogOut: PropTypes.func,
};

export default Navbar;
