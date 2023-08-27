<<<<<<< HEAD
//Homepage should only have Nav tabs and welcome message
=======
//HomePage.jsx
import PropTypes from "prop-types";
>>>>>>> 8848a11674d77f75fc54a237304881696523fcf1
import Navbar from "./NavBar";
export const Home = () => {
  return (
    <div className="home">
      <Navbar />
        <div>
      <h1>Welcome to MCJ Connections!</h1>
      </div>
    </div>
  );
};
Home.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};


export default Home;

        
      
  
