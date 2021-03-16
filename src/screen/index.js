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

    // console.log('socket: ', socket)
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages])

  useEffect(() => {
    if (socket) {
      socket.on('message', (payload) => {
        console.log('payload: ', payload)
        setMessages([...messages, {...payload}]);
      });
    }
  })

  const handleOnChangeEmail = e => {
    setEmail(e.target.value);
  }

  const onChangeNewMessage = e => {
    setNewMessage(e.target.value);
  }

  const handleSendMessage = () => {
    socket.emit('message', {
      payload: {
        email: email,
        content: newMessage
      }
    });

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
          <Message messages={messages} className="msgs"/>
          <div className="footer">
            <Input onChange={onChangeNewMessage} />
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