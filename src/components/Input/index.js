import React from 'react';
import './style.css'

// import { Container } from './styles';

function Input({ placeholder, onChange }) {
  return(
    <input 
      className="input"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input;