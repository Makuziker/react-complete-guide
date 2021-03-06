import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, NavLink, Switch } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to='/'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?lang=en'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/:postId' exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;