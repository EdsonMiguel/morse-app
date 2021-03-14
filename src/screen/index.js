import React from 'react';
import Message from '../components/Message';
import Input from '../components/Input';
import Send from '../components/SendButton';
import './style.css'
import mocados from '../config/mocks'

function screen() {
  return (
    <div className="container">
        <div className="app">
        <div className="header">
          <h1>Morse</h1>
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

export default screen;