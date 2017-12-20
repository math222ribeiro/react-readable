import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {getPost} from "../utils/api";
import CommentSection from "./CommentSection";
import {setParentPost} from "../actions/index";

class PostDetail extends Component {
  state = {
    loading: true,
  };

  error = false;
  componentDidMount() {
    const {post_id} = this.props.match.params;
    getPost(post_id)
      .then(res => res.json())
      .then(post => {
          this.setState({
            loading: false,
          });
          this.error = post.error;

          if (!this.error)
            this.props.setPost(post);
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
          this.error || this.props.post.category !== category ? (
            "Invalid Post"
          ) : (
            <div>
              <h1
                style={{
                  padding: '20px',
              }}>
                Post Detail
              </h1>
              <Post post={this.props.post} detailView history={this.props.history}/>
              <CommentSection />
            </div>
          )


        ) }
      </div>
    )
  }
}

function mapStateToProps({comments}) {
  return {
    post: comments.parentPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPost: (post) => dispatch(setParentPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);