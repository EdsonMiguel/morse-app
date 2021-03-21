import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Message from '../components/Message';
import Input from '../components/Input';
import Send from '../components/SendButton';
import './style.css';

const WS_ENDPOINT = 'http://localhost:4000';

function Screen() {
  const [socket, setSocket] = useState(null);
  const [email, setEmail] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) {
      setSocket(io(WS_ENDPOINT));
    }
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (payload) => {
        handlePushMessage(payload);
      });
    }
  });

  const handlePushMessage = payload => {
    setMessages([...messages, {payload}]);
  }

  const handleOnChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  }

  const onChangeNewMessage = e => {
    setNewMessage(e.target.value);
  }

  const handleSendMessage = () => {
    const payload = {
      email: email,
      content: newMessage
    }

    socket.emit('message', { payload });

    handlePushMessage(payload);

    setNewMessage('');
  }

  return (
    <div className="container">
        <div className="app">
        <div className="header">
          <h1>Morse</h1>
          <Input
            placeholder='Entre com seu e-mail'
            onChange={handleOnChangeEmail}
            value={email}
          />
        </div>
          <Message
            className="msgs"
            messages={messages}
            loggedUser={email}
          />
          <div className="footer">
            <Input
              onChange={onChangeNewMessage}
              value={newMessage}
            />
            <Send
              disabled={newMessage === ''}
              onClick={handleSendMessage}
            />
          </div>
        </div>

    </div>
  )
}

export default Screen;