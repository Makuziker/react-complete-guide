import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static async getInitialProps(context) {
    // this is logged on the server, before it is shipped to the browser
    // console.log(context);
    // don't need async if it just uses Promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Impact Millions'});
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;