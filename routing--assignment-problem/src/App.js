import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'inline-block' }}><NavLink to='/courses'>Courses</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path='/users' component={Users} />
            <Route path='/courses' component={Courses} />
            <Redirect from='/all-courses' to='/courses' />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
