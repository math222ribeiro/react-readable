import React, {Component} from 'react';
import Post from "./Post";

class Posts extends Component {
  render() {
    return (
      <div className="posts-container">
        <Post/>
      </div>
    )
  }
}

export default Posts;