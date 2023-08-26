//Posts.jsx

import { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";
import { Link, useNavigate } from "react-router-dom";
import "./Posts.css";

export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const responseData = await fetchPosts();
        if (responseData) {
          setUserPosts(responseData);
        }
      } catch (error) {
        console.error("Cannot display posts", error);
      }
    }
    fetchPostsData();
  }, []);

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div>
        {userPosts.map((post) => (
          <div key={post._id} className="eachPost">
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
          </div>
        ))}
        <button className="createPostButton" onClick={handleCreatePost}>
          Create New Post
        </button>
        <Link to="/" className="returnButton">
          <button className="goBack" onClick={() => navigate("/")}>
            Return
          </button>
        </Link>
      </div>
    </div>
  );
}