import React, {Component} from 'react';
import CommentForm from "./CommentForm";
import Comments from "./Comments";

class CommentSection extends Component {
  render() {
    return (
      <div>
        <CommentForm/>
        <Comments/>
      </div>
    )
  }
}

export default CommentSection