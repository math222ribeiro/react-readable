import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteCommentRequestAction, editCommentRequestAction, voteCommentRequestAction} from "../actions/index";
import Modal from 'react-modal';

class Comment extends Component {
  state = {
    vote: 'none',
    modalIsOpen: false
  };

  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id)
  };

  handleVote = (vote) => {
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


  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  };

  afterOpenModal = () => {
    const {comment} = this.props;
    this.editAuthorInput.value = comment.author;
    this.editBodyInput.value = comment.body;
  };

  closeModal = (option) => {
    this.setState({modalIsOpen: false});
    let body = this.editBodyInput.value;
    let timestamp = Date.now();
    if (option === 'edit') {
      if (body !== '') {
        this.props.editComment(
          this.props.comment.id,
          {
            body,
            timestamp
          }
        )
      }
    }
  };

  customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  render() {
    const {comment} = this.props;
    const {vote} = this.state;

    return (
      <div className="comment-container">
        <h3 className="comment-author">{comment.author}</h3>
        <span className="comment-info">{comment.voteScore} points, {new Date(comment.timestamp).toDateString()}</span>
        <div className="comment-btn-container">
          <button className="comment-btn margin-button" onClick={this.deleteComment}>Delete</button>
          <button className="comment-btn" onClick={this.openModal}>Edit</button>
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

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={this.customStyles}
          ariaHideApp={false}
        >
          <h3>Edit Comment</h3>
          <input ref={input => this.editAuthorInput = input} disabled={true}/>
          <textarea ref={input => this.editBodyInput = input}/>
          <button className="modal-btn destructive" onClick={() => {this.closeModal("edit")}}>EDIT</button>
          <button className="modal-btn" onClick={() => {this.closeModal("cancel")}}>CANCEL</button>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteComment: (id, option) => dispatch(voteCommentRequestAction(id, option)),
    deleteComment: (id) => dispatch(deleteCommentRequestAction(id)),
    editComment: (id, comment) => dispatch(editCommentRequestAction(id, comment))
  }
}

export default connect(null, mapDispatchToProps)(Comment);