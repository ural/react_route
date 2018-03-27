import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import { Link } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: "/new-post",
                hash: "#submit",
                search: "?quick-submit=true"
              }}>New POst</Link></li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost}  />
{/*
        <section className="Posts">
          <Posts/>
        </section>
*/}

      </div>
    );
  }
}

export default Blog;