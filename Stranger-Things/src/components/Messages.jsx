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
        onChange={(e) => setNewMessage(e.target.value)} />
        </label>
        <label>
          Post:
          <input type="text"
          value={post} onChange={(e) => setPost(e.target.value)} />
        </label>
        <label>
          From:
          <input type="text"
          value={fromUser} onChange={(e) => setFromUser(e.target.value)} />
        </label>
        <label>
          When:
          <input type="text"
          value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
        </label>
        <label>
          Update:
          <input type="text"
          value={updatedAt} onChange={(e) => setCreatedAt(e.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
      
      
      {/* Render messages from the data state */}
      <h2>Messages:</h2>
      {data.map((message) => (
        <div key={message._id} className="userMessages" >
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






// import { useEffect, useState } from "react";
// import { sendMessage } from "../API-Source/API";
// import "./Messages.css";
// import PropTypes from "prop-types";
// import { BASE_URL } from "../API-Source/API";

// Send a message
// export default function Messages({ token }) {
//   const [data, setData] = useState([]);
//   const [newMessage, setNewMessage] = useState(""); 

  // useEffect(() => {
  // async function sendMessage(conversationId, messageText, token) {
  // try {
  //   const response = await fetch(`${BASE_URL}/messages`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       message: {
  //         content: messageText,
  //         conversationId: conversationId,
  //       },
  //     }),
      
  //   });
  //   sendMessage();
  //   const result = await response.json();
  //   return result;
  // } catch (error) {
  //   console.error(error);
//     throw error;
    
//   }
  
// }

















// export default function Messages({ token }) {
//   const [data, setData] = useState([]);
//   const [newMessage, setNewMessage] = useState(""); 

  // Fetch message data using the sendMessage function
  // useEffect(() => {
  //   async function fetchMessageData() {
  //     try {
  //       const messageData = await sendMessage(); 
  //       setData(messageData);
  //     } catch (error) {
  //       console.error("Error fetching message data:", error);
  //     }
  //   }

  //   fetchMessageData();
  // }, [token]);

  //handle sending a new message
//   const handleSendMessage = async () => {
//     try {
//         const token = "";
//         let conversationId;

//         conversationId = "";

//         if (newMessage.trim() !== "") {
//           const messageData = {
//             content: newMessage,
            
//             id: "_id", 
//             fromUser: "fromUser", 
//           };
    
          
//           const response = await sendMessage(conversationId, messageData, token);
            
//           if (response.data && response.data.message) {
//             const newMessage = response.data.message;
//             setData([...data, newMessage]);
//             setNewMessage("");
//           } else {
//             console.error("Invalid response format:", response);
//           }
//         }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };
  

//   return (
//     <div id="messages">
//       <h1>Welcome to Our Message Board</h1>
//       <p>Engage in discussions, share ideas, and connect with others.</p>
//       <p>Discover a diverse range of topics and perspectives.</p>
//       <p>Join the conversation and start connecting!</p>

//       <ul>
//         {data.map((message, index) => (
//           <li key={index}>{message.content}</li>
//         ))}
//       </ul>

//       <div>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send Message</button>
//       </div>
//     </div>
   
//    )
  
//         }
  

// Messages.prototype = {
//   token: PropTypes.string,
// };


