import { useEffect, useState } from 'react';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState(`ws://127.0.0.1:8000/ws/socket-server/`);
  const [chatSocket, setChatSocket] = useState(new WebSocket(url));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getWebSocket();
  }, []);

  useEffect(() => {
  }, [messages]);

  const getWebSocket = () => {
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);

      if (data.type === 'chat') {
        const conMessage = [...messages, data.message]
        console.log(typeof conMessage)
        console.log('messages', conMessage)
        // setMessages([...conMessage, data.message]);
        // console.log('messages:', messages);

      }
    };
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    chatSocket.send(
      JSON.stringify({
        message: message,
      })
    );
    document.querySelector('#form').reset();
  };

  return (
    <>
      <div className='container bg-slate-300'>
        {/* <textarea rows={10} cols={40}></textarea> */}
        <form id='form' onSubmit={handleSumit}>
          <input
            type={'text'}
            name='message'
            placeholder='type something'
            onChange={handleChange}
          />
          <button type='submit' className='bg-blue-50 p-2 rounded-lg block'>
            Send
          </button>
        </form>

        <div className='messages'>
          {messages.map((item, key) => {
            return(<div key={key}>{item}</div>)
          })}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
