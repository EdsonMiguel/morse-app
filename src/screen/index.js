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
    <div className='container'>
      <h1 className='title'>Morse</h1>
      <Input
        placeholder='Entre com seu e-mail'
        onChange={handleOnChangeEmail}
      />
      <Send
        onClick={handleCallLogin}
        disabled={email === ''}
      />

      <section className='container'>
        <div className='app'>
          <Message data={mocados} />
          <Input placeholder='Digite sua mensagem' />
          <Send/>
        </div>
      </section>
    </div>
  )
}

export default Screen;