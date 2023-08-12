import React, { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";
import "../App.css";



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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>price: {post.price}</p>
            <p>location: {post.location}</p>
            <p>will deliver: {post.willDeliver}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
