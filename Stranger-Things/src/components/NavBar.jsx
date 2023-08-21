import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav id="navlinks">
      
        <ul style={{ listStyle: "none", padding: 5 }}>
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
          <li id="profileLink">
            <Link to="/profile" className="profileLink">
              Profile
            </Link>
          </li>
          <li id="loginLink">
            <Link to="/login" className="loginLink">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
