import React from 'react';
import './styles.css'

function Message({ loggedUser, messages }) {
  // const currentUser = "edson@teste";
  return (
      <div className="area">
        {messages.map(m => (
          <div className="line">
            {console.log('loggedUser: ', loggedUser, 'email: ', m.payload.email)}
            <div className={m.payload.email === loggedUser ? 'me' : 'you'}>
                {m.payload.content}
              </div>
          </div>
          ))
        }
      </div>
    );
}

export default Message;