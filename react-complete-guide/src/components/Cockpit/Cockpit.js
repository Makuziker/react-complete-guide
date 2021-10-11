import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  let btnClass = ['btn'];
  if (props.showPersons) {
    btnClass.push('red');
  }

  const pClass = [];
  if (props.persons.length <= 2) {
    pClass.push('red');
  }
  if (props.persons.length <= 1) {
    pClass.push('bold');
  }

  return (
    <div className='Cockpit'>
      <h1>{props.appTitle}</h1>
        <p className={pClass.join(' ')}>stuff and things</p>
        <button
          className={btnClass.join(' ')}
          onClick={props.clicked} >
          Toggle Persons
        </button>
    </div>
  )
}

export default cockpit;