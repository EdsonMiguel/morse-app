import React from 'react';
import './style.css'

// import { Container } from './styles';

function Input({ placeholder, onChange, value }) {
  return(
    <input 
      className="input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input;