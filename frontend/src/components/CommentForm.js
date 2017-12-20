import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guid} from "../utils/functions";
import {addCommentRequestAction} from "../actions/index";


class CommentForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let body = this.bodyInput.value;
    let author = this.authorInput.value;
    if (this.authorInput.value !== '' && this.bodyInput !== '') {
      let id = guid();
      let timestamp = Date.now();
      let parentId = this.props.post.id;
      this.props.addComment({
        body,
        author,
        id,
        timestamp,
        parentId
      });

      this.authorInput.value = '';
      this.bodyInput.value = '';
      alert('Comment added!');
    }
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <h3>New Comment</h3>
        <input
          placeholder="Author"
          ref={(input) => this.authorInput = input}
        />
        <textarea
          placeholder="Write a comment"
          ref={(input) => this.bodyInput = input}>
        </textarea>
        <button className="post-button">POST</button>
      </form>
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
    addComment: (comment) => dispatch(addCommentRequestAction(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);