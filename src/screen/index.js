import React from 'react';
import Message from '../components/Message';
import Input from '../components/Input';
import Send from '../components/SendButton';
import './style.css'
import mocados from '../config/mocks'

function screen() {
  return (
    <div className="container">
      <h1 className="title">Morse</h1>
      <section className="container">
        <div className="app">
          <Message data={mocados}/>
          <Input/>
          <Send/>

        </div>

      </section>
    </div>
  )
}

export default screen;