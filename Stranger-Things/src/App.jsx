import { useState } from "react";
import "./App.css";
import "./API-Source/API";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/NewUserSignUp";

import RoutePaths from "./components/RoutesPaths";




function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div id="container">
       <RoutePaths/>
       
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} />
      </div>
    </>
  );
}

Authenticate.defaultProps = {
  token: null,
};

export default App;
