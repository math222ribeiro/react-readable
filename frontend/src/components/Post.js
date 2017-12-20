import React, {Component} from 'react';
import UpVoteButton from '../assets/Plus-Button.png';
import DownVoteButton from '../assets/Minus-Button.png';
import EditButton from '../assets/Edit-Button.png';
import DeleteButton from '../assets/Delete-Button.png';
import {connect} from 'react-redux';
import {deletePost, votePostRequestAction} from "../actions/index";
import Modal from 'react-modal';

class Post extends Component {
  state = {
    modalIsOpen: false
  };

  buttonClicked = false;

  handleVote(option) {
    this.buttonClicked = true;
    this.props.vote(
      this.props.post.id,
      option
    );

    if (this.props.detailView) {
      this.props.post.voteScore += option === "upVote" ? 1 : -1;
      this.forceUpdate()
    }
  }

  showDetails = () => {
    const {detailView, history, post} = this.props;
    if (!detailView && !this.buttonClicked) history.push(`/${post.category}/${post.id}`);
    this.buttonClicked = false
  };

  openModal = () => {
    this.buttonClicked = true;
    this.setState({modalIsOpen: true});
  };

  afterOpenModal = () => {
    this.title.innerHTML = `Are you sure you want to delete "<span style='color: blue'>${this.props.post.title}</span>"?`
  };

  closeModal = (option) => {
    this.buttonClicked = true;
    this.setState({modalIsOpen: false});
    if (option === 'delete') {
      this.props.deletePost(this.props.post.id);
      if (this.props.detailView) this.props.history.push('/');
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
    const {post, detailView} = this.props;
    return (
      <div
        className="post"
        onClick={this.showDetails}
        style={{
          cursor: !detailView ? 'pointer' : 'default'
        }}
      >
        <h2 className="post-title">{post.title}</h2>
        <h4 className="post-author">{post.author} {
          detailView ? (<span className="date"> - {new Date(post.timestamp).toDateString()}</span>) : (" ")
        }</h4>
        <p className="post-body">
          {post.body}
        </p>

        <p className="post-vc">
          {post.voteScore} Votes - {post.commentCount} Comments
        </p>

        <div className="post-buttons" style={{zIndex: 10}}>
          <img src={UpVoteButton} style={{marginLeft: '0px'}} onClick={() => {this.handleVote("upVote")}} alt="Up Vote"/>
          <img src={DownVoteButton} onClick={() => {this.handleVote("downVote")}} alt="Down Vote"/>
          <img src={EditButton} alt="Edit Post"/>
          <img src={DeleteButton} alt="Delete Post" onClick={this.openModal}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={this.customStyles}
          ariaHideApp={false}
        >
          <h2 ref={title => this.title = title}>Hello</h2>
          <button className="modal-btn destructive" onClick={() => {this.closeModal("delete")}}>DELETE</button>
          <button className="modal-btn" onClick={() => {this.closeModal("cancel")}}>CANCEL</button>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    vote: (id, option) => dispatch(votePostRequestAction(id, option)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);