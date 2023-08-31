import { NavLink, Link } from "react-router-dom";
import "./UserTabs.css";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

const UserTabs = () => {
  const navigate = useNavigate();
  return (
    <div className="userTabs">
      <input type="radio" name="toggle" id="toggleOpen" value="toggleOpen" />
      <input type="radio" name="toggle" id="toggleClose" value="toggleClose" />
      <figure id="welcomeMessage">
        <figcaption>
          <h1>
            <label htmlFor="toggleOpen" title="Click to Open"></label>
            <label htmlFor="toggleClose" title="Click to Close">
              ✖
            </label>
            <b>
              w
              <Link to="/" className="homeLink" onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <defs>
                    <lineargradient
                      id="svgGradient"
                      x1="0"
                      y1="0"
                      x2="20"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#00ffc3" />
                      <stop offset="0.09090909090909091" stopColor="#00fad9" />
                      <stop offset="0.18181818181818182" stopColor="#00f4f0" />
                      <stop offset="0.2727272727272727" stopColor="#00eeff" />
                      <stop offset="0.36363636363636365" stopColor="#00e6ff" />
                      <stop offset="0.4545454545454546" stopColor="#00dcff" />
                      <stop offset="0.5454545454545454" stopColor="#00d2ff" />
                      <stop offset="0.6363636363636364" stopColor="#00c5ff" />
                      <stop offset="0.7272727272727273" stopColor="#00b8ff" />
                      <stop offset="0.8181818181818182" stopColor="#6da8ff" />
                      <stop offset="0.9090909090909092" stopColor="#9f97ff" />
                      <stop offset="1" stopColor="#c285ff" />
                    </lineargradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                <h4>Home</h4>
              </Link>
            </b>
            <b>
              e
              <Link
                to="/create-post"
                className="createPost"
                onClick={() => navigate("/create-post")}
                title="Write A Post"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <h4>Create A Post</h4>
              </Link>
            </b>
            <b>
              l
              <Link
                to="/posts"
                className="posts"
                onClick={() => navigate("/posts")}
                title="See Posts"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <h4>Posts</h4>
              </Link>
            </b>
            <b>
              c
              <Link
                to="/messages"
                className="messages"
                onClick={() => navigate("/messages")}
                title="Messages"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                </svg>
                <h4>Messages</h4>
              </Link>
            </b>
            <b>
              o
              <Link to="/" className="returnButton">
                <button
                  style={{ display: "none" }}
                  className="goBack"
                  onClick={() => navigate("/profile")}
                ></button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <h4>Return</h4>
              </Link>
            </b>
            <b>
              m
              <Link to="/logout" className="logoutLink">
                <button
                  style={{ display: "none" }}
                  id="logOut"
                  onClick={Logout}
                >
                  <h4>Log Out</h4>
                </button>
                Logout
              </Link>
            </b>
            <b>
              e
              <NavLink to="#" onClick={(e) => e.preventDefault()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </NavLink>
            </b>
          </h1>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserTabs;
