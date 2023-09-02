//Posts.jsx

import { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";
import { Link, useNavigate } from "react-router-dom";
import "./Posts.css";
import SearchBar from "./SearchBar";
export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const responseData = await fetchPosts();
        if (responseData) {
          console.log(responseData);
          setUserPosts(responseData);
        }
      } catch (error) {
        console.error("Cannot display posts", error);
      }
    }
    fetchPostsData();
  }, []);

  return (
    <div className="posts">
      <h1>Posts</h1>
      <SearchBar />
      <div>
        {userPosts.map((post) => (
          <div key={post._id} className="eachPost">
            <p className="postP">Title: {post.title}</p>
            <p className="postP">Description: {post.description}</p>
            <p className="postP">Price: {post.price}</p>
            <p className="postP">Location: {post.location}</p>
            <p className="postP">Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
          </div>
        ))}

        <Link to="/" className="returnButton">
          <button className="goBack" onClick={() => navigate("/")}>
            Return
          </button>
        </Link>
      </div>
    </div>
  );
}
