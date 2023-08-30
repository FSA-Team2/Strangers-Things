import { useState } from "react";
import PropTypes from "prop-types";
import { createNewPost } from "../API-Source/API"; 
import { Link, useNavigate } from "react-router-dom";
import "./CreatePost.css";

export default function CreatePost({ token }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    const postDetails = {
      title,
      description,
      price,
      willDeliver,
    };

    try {
      const result = await createNewPost(postDetails, token); 
      console.log(result);

    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Will Deliver:
          <input
            type="checkbox"
            checked={willDeliver}
            onChange={(e) => setWillDeliver(e.target.checked)}
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
      <Link to="/" className="returnButton">
        <button className="goBack" onClick={() => navigate("/profile")}>
          Return
        </button>
      </Link>
    </div>
  );
}

CreatePost.propTypes = {
  token: PropTypes.string.isRequired,
};