//HomePage.jsx
import PropTypes from "prop-types";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const Home = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <div className="home">
      <Navbar token={token} handleLogOut={handleLogOut} />
      <div>
        <button onClick={handleLogOut}>Log Out</button>
        
        {/* Updated content */}
        <h1>Welcome to Our Message Board</h1>
        <p>Engage in discussions, share ideas, and connect with others.</p>
        <p>Discover a diverse range of topics and perspectives.</p>
        <p>Join the conversation and start connecting!</p>
      </div>
    </div>
  );
};
Home.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default Home;