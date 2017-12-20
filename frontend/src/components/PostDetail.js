import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPost} from "../utils/api";

class PostDetail extends Component {
  state = {
    loading: true,
    post: {}
  };

  componentDidMount() {
    const {post_id} = this.props.match.params;
    getPost(post_id)
      .then(res => res.json())
      .then(post => {
          this.setState({
            loading: false,
            post: post
          })
        }
      )
  }

  render() {
    const {category} = this.props.match.params;

    return (
      <div>
        {this.state.loading ? (
          "Loading"
        ) : (
          this.state.post.error || this.state.post.category !== category ? (
            "Invalid Post"
          ) : (
            <Post post={this.state.post} detailView history={this.props.history}/>
          )


        ) }
      </div>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    posts: posts.all
  }
}

export default connect(mapStateToProps, null)(PostDetail);