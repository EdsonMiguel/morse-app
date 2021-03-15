import React from 'react';
import './styles.css'

function Message({ messages }) {
  // const currentUser = "edson@teste";
  return (
      <div className="area">
        {
          messages.map(m => (
              // <div className={msg.author === currentUser ? 'me' : 'you'}>
              //   {msg.data}
              // </div>
              <div className={'me'}>
                {m.content}
              </div>

          ))
        }
      </div>
    );
}

export default Message;