import { useState } from "react";
import { BASE_URL } from "../API-Source/API";
import "./Messages.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

export default function Messages({ conversationId, token }) {
  const [data, setData] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [post, setPost] = useState("");
  const [fromUser, setFromUser] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const navigate = useNavigate();
  async function sendMessage(messageText) {
    try {
      const response = await fetch(`${BASE_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: messageText,
            conversationId: conversationId,
            post,
            fromUser,
            createdAt,
            updatedAt,
          },
        }),
      });

      const result = await response.json();
      setData(result.data.message);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      await sendMessage(newMessage);
      setNewMessage("");
      setPost("");
      setFromUser("");
      setCreatedAt("");
      setUpdatedAt("");
    }
  };

  return (
    <div className="form_group">
      <h2>New Message:</h2>
      <form className="formMessage" onSubmit={handleSendMessage}>
        <label>
          Post:
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form_label">
          From:
          <input
            className="form_input"
            type="text"
            value={fromUser}
            onChange={(e) => setFromUser(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form_label">
          When:
          <input
            className="form_input"
            type="text"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form_label">
          Update:
          <input
            className="form_input"
            type="text"
            value={updatedAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form_label">
          Message:
          <input
            className="form_input_mess"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </label>

        <button type="submit">Send</button>
      </form>

      {/* Render messages from the data state */}
      <h2>Messages:</h2>
      {data.map((message) => (
        <div key={message._id} className="userMessages">
          <p>Message: {message.content}</p>
          <p>Post: {message.post}</p>
          <p>From: {message.fromUser}</p>
          <p>When: {message.createdAt}</p>
          <p>Update: {message.updatedAt}</p>
        </div>
      ))}
      <Link to="/" className="returnButtonMessages">
        <button className="goBackMessages" onClick={() => navigate("/")}>
          Return
        </button>
      </Link>
    </div>
  );
}

Messages.propTypes = {
  token: PropTypes.string,
  conversationId: PropTypes.string,
};
