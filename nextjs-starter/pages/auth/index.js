import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth page - {props.appName}</h1>
    <User name='Brogan' age='23' />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'To Make Millions'});
    }, 1000);
  });
  return promise
};

export default authIndexPage;