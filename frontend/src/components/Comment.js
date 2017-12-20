import React, {Component} from 'react';
import {connect} from 'react-redux';
import {voteCommentRequestAction} from "../actions/index";

class Comment extends Component {
  state = {
    vote: 'none'
  };

  handleVote(vote) {
    const currentVote = this.state.vote;
    const voteComment = this.props.voteComment;
    const id = this.props.comment.id;

    if (currentVote === vote) {
      vote = 'none';

      this.setState({
        vote: vote
      });

      if (currentVote === "upVote") {
        voteComment(id, "downVote");
      } else if (currentVote === "downVote") {
        voteComment(id, "upVote");
      }

      return;
    }

    this.setState({
      vote: vote
    });

    voteComment(id, vote);


  }

  render() {
    const {comment} = this.props;
    const {vote} = this.state;

    return (
      <div className="comment-container">
        <h3 className="comment-author">{comment.author}</h3>
        <span className="comment-info">{comment.voteScore} points, {new Date(comment.timestamp).toDateString()}</span>
        <div className="comment-btn-container">
          <button className="comment-btn margin-button">Delete</button>
          <button className="comment-btn">Edit</button>
        </div>
        <p>{comment.body}</p>

        <button
          className="comment-btn margin-button"
          style={vote === "upVote" ? ({color: '#4A90E2'}) : ({color: '#bbb'})}
          onClick={() => (this.handleVote('upVote'))}
        >
          up
        </button>

        <button
          className="comment-btn"
          style={vote === "downVote" ? ({color: '#D0021B'}) : ({color: '#bbb'})}
          onClick={() => (this.handleVote('downVote'))}
        >
          down
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteComment: (id, option) => dispatch(voteCommentRequestAction(id, option))
  }
}

export default connect(null, mapDispatchToProps)(Comment);