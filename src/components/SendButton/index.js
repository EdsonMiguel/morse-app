import React from 'react';
import { FaBeer } from 'react-icons/fa';
import './styles.css'

// import { Container } from './styles';

function SendButton({ onClick, disabled }) {
  return(
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled}
    >
      <FaBeer />
  </button>
  )
}

export default SendButton;

