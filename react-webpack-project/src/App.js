import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';

const asyncPizza = asyncComponent(() => import('./containers/Pizza'));
const asyncUsers = asyncComponent(() => import('./containers/Users'));

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Users</Link> | <Link to='/pizza'>Pizza</Link>
        </div>
        <div>
          <Route path='/' exact component={asyncUsers} />
          <Route path='/pizza' exact component={asyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;