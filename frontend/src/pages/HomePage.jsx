import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/messages/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens.access),
      },
    });

    const data = await response.json();
    setMessages(data);
  };

  return (
    <>
      <h1>You are logged to the home page</h1>

      <ul>
        {messages.map((message) => (
          <li key={message.content}>* {message.content} - by {message.author} ({message.timestamp})</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
