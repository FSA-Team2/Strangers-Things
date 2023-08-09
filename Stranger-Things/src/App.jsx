import { useState } from 'react'
import './App.css'
import FetchPosts from './API-Source/API'
import Authenticate from './components/Authenticate';
import SignUpForm from './components/NewUserSignUp';
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <div id='conatiner'>
    <FetchPosts />
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} />

    </div>

      
    </>
  );
 
}

Authenticate.defaultProps = {
  token: null,
};

export default App
