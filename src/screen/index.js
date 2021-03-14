import React, { useState } from 'react';
import Message from '../components/Message';
import Input from '../components/Input';
import Send from '../components/SendButton';
import './style.css'
import mocados from '../config/mocks'
import { login } from '../utils/api/auth';

function Screen() {
  const [email, setEmail] = useState('');

  const handleOnChangeEmail = e => {
    setEmail(e.target.value);
  }

  const handleCallLogin = async () => {
    console.log('clicou')
    const response = await login(email);
    console.log(response);
  }

  return (
    <div className="container">
        <div className="app">
        <div className="header">
          <h1>Morse</h1>
          <Input
          placeholder='Entre com seu e-mail'
          onChange={handleOnChangeEmail}
          />
        <Send
          onClick={handleCallLogin}
          disabled={email === ''}
        />
        </div>
          <Message data={mocados} className="msgs"/>
          <div className="footer">
            <Input/>
            <Send/>
          </div>
        </div>

    </div>
  )
}

export default Screen;