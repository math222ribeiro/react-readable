import React, {Component} from 'react';
import Post from "./Post";
import { connect } from 'react-redux';
import {fetchPostsAction} from "../actions/index";
import {Loading} from "./Loading";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const {posts, postsLoaded} = this.props;
    return (
      <div className="posts-container">
        {
          postsLoaded ? (
            posts.map(post => (
              <Post key={post.id} post={post}/>
            ))
          ) : (
            <Loading/>
          )
        }
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts.all,
    postsLoaded: posts.postsLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPostsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);