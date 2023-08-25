//App.jsx

import React, { useState } from "react";
import RoutePaths from "./components/RoutesPaths";
import Authenticate from "./components/Authenticate";
import "./App.css";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <RoutePaths token={token} setToken={setToken} /> {/* Pass setToken to RoutePaths */}
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;