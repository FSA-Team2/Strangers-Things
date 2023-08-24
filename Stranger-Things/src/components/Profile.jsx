// import { Link, useHistory } from "react-router-dom";



//GET/users/me in the herokuapp helper page. This route is used to grab an already logged in user's relevant data. Messages, etc. Must pass a valid token or it will be rejected.

export default function Profile() {

  // const history = useHistory();

  //   history.push("/")


    return (
      <div className="profile">
        <h1>Profile</h1>

        
       
        {/* <Link to="/" className="returnButton">
          <button className="goBack">Return</button>
          </Link> */}

      </div>
    );
  }