import React from 'react';
//import { FiSend } from 'react-icons/fi';
import './styles.css'



function SendButton({ onClick, disabled }) {
  return(
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled}
    >
      Enviar
  </button>
  )
}

export default SendButton;

