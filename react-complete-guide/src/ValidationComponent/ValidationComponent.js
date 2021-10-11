import React from 'react';

const ValidationComponent = (props) => {
  const output =
    props.length >= props.minLength
    ? (<p>Text long enough</p>)
    : (<p>Text too short</p>)
  // let output = (
  //   <p>Text too short</p>
  // );

  // if (props.length >= props.minLength) {
  //   output = (
  //     <p>Text long enough</p>
  //   );
  // }

  return (
    <div>
      {output}
    </div>
  )
};

export default ValidationComponent;