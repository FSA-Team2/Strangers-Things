
import Navbar from './NavBar';
import React from 'react'
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();

  const handleLogOut = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <div className='Logout'>
      <Navbar token={token} handleLogOut={handleLogOut} />
      
        <button onClick={handleLogOut}>Log Out</button>

</div>
  )
}
export default Logout