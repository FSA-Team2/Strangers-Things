import React, { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";
import "../App.css";
import '../components/Posts.css'


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Erorr getting data", error);
      }

    }
    getPosts();

  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <p className="post-price">price: {post.price}</p>
            <p className="post.location">location: {post.location}</p>
            <p className="post-delivery">will deliver: {post.willDeliver}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
