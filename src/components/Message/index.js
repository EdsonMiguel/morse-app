import React from 'react';
import './styles.css'



function Message(props) {

  const currentUser = "edson@teste";

  const { data } = props;
  return (
      <div>
        <h1 className="ola">Titulo</h1>
  
        {
          data.map(msg=>(
            <div className={msg.author === currentUser ? 'me' : 'you'}>
              {msg.data}
            </div>
          ))
        }
      </div>
    );
}

export default Message;