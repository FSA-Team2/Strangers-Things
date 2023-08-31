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
    <div>
      <h2>New Message:</h2>
      <form onSubmit={handleSendMessage}>
        <label>
          Message:
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </label>
        <label>
          Post:
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </label>
        <label>
          From:
          <input
            type="text"
            value={fromUser}
            onChange={(e) => setFromUser(e.target.value)}
          />
        </label>
        <label>
          When:
          <input
            type="text"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <label>
          Update:
          <input
            type="text"
            value={updatedAt}
            onChange={(e) => setCreatedAt(e.target.value)}
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
      <Link to="/" className="returnButton">
        <button className="goBack" onClick={() => navigate("/")}>
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
