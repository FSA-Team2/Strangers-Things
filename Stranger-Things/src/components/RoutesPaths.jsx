import { Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";

const RoutePaths = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default RoutePaths;
