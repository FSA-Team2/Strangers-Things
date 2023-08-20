import { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";

export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);

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

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div>
        {userPosts.map((post) => (
          <div key={post._id}>
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
