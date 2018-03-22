import React, { Component } from 'react';
import Posts from './Posts/Posts';

/*
import axios from '../../axios';
*/

/*
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
*/
import './Blog.css';

class Blog extends Component {
/*
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };
*/

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New POst</a></li>
            </ul>
          </nav>
        </header>

        <section className="Posts">
          <Posts/>
        </section>

        {/*
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
*/}
      </div>
    );
  }
}

export default Blog;