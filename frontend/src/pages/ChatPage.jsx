import { useEffect, useState } from 'react';

const ChatPage = () => {
  const [url, setUrl] = useState(`ws://127.0.0.1:8000/ws/socket-server/`);
  const [chatSocket, setChatSocket] = useState(new WebSocket(url));
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    chatSocket.onopen = (e) => {
      fetchMessages();
    };

    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);

      if (data['command'] === 'messages') {
        setMessages(data['messages']);
        for (let i = 0; i < data['messages'].length; i++) {
          console.log(data['messages'][i]);
        }
      } else if (data['command'] === 'new_message') {
        console.log(data['message']);
      }
    };

    // chatSocket.onclose = function (e) {
    //   console.error('Chat socket closed unexpectedly');
    // };
  }, []);

  useEffect(() => {}, [messages]);

  const fetchMessages = () => {
    chatSocket.send(JSON.stringify({ command: 'fetch_messages' }));
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    chatSocket.send(
      JSON.stringify({
        message: message,
        command: 'new_message',
      })
    );
    document.querySelector('#form').reset();
  };

  return (
    <>
      <div className='container bg-slate-300 mx-auto my-10 rounded-lg h-1/2'>
        {/* <textarea rows={10} cols={40}></textarea> */}
        <form id='form' onSubmit={handleSumit}>
          <input
            type={'text'}
            name='message'
            placeholder='type something'
            className='mx-5'
            onChange={handleChange}
          />
          <button type='submit' className='bg-blue-50 my-5 p-2 rounded-lg'>
            Send
          </button>
        </form>

        <div className='messages ml-5 w-1/4'>
          <h3 className='font-bold'>Messages:</h3>
          {messages.map((message, key) => {
            return (
              <div key={key} className='min-h-full'>
                {message['content']} - by {message['author']} (
                {message['timestamp']})
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
