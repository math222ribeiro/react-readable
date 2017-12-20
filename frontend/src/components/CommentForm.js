import React, {Component} from 'react';

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form">
        <h3>New Comment</h3>
        <input placeholder="Author"/>
        <textarea placeholder="Write a comment">

        </textarea>
        <button className="post-button">POST</button>
      </form>
    )
  }
}

export default CommentForm;