import { useState, useEffect } from "react";
import { fetchPosts } from "../API-Source/API";

export const Home = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const responseData = await fetchPosts();
        if (responseData.success) {
          setUserPosts(responseData.data.posts);
        }
      } catch (error) {
        console.error("Cannot display posts", error);
      }
    }
    fetchPostsData();
  }, []);

  return (
    <div className="home">
      <div>
        {/* Render the user posts */}
        {userPosts.map((post) => (
          <div key={post._id}>
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
            {/* Other properties can be displayed similarly */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
