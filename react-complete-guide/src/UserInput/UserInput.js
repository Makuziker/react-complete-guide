import React from 'react';

const userinput = (props) => {
  const style = {
    width: '40%',
    margin: '15px auto',
    padding: '10px',
    boxShadow: '0 1px 2px #ddd'
  };

  return (
      <input 
        type='text'
        style={style}
        onChange={props.changed}
        value={props.username} />
  );
}

export default userinput;