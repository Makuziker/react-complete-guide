import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
  return (
    <div className='user-output'>
      <p>Username:</p>
      <p>{props.username}</p>
    </div>
  );
}

export default useroutput;