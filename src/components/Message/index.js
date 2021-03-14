import React from 'react';
import './styles.css'

function Message(props) {
  const currentUser = "edson@teste";
  const { data } = props;

  return (
      <div className="area">
        
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