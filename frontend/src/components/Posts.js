import React, {Component} from 'react';
import Post from "./Post";
import { connect } from 'react-redux';
import {changeCategory, fetchPostsRequest} from "../actions/index";
import {Loading} from "./Loading";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    let route = this.props.match.params.category;
    if (route)
      this.props.changeCategory(route);
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
    posts: posts.filteredPosts,
    postsLoaded: posts.loaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPostsRequest()),
    changeCategory: (newCategory) => dispatch(changeCategory(newCategory))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);