import React, {Component} from 'react';
import UpVoteButton from '../assets/Plus-Button.png';
import DownVoteButton from '../assets/Minus-Button.png';
import EditButton from '../assets/Edit-Button.png';
import DeleteButton from '../assets/Delete-Button.png';
import {connect} from 'react-redux';
import {deletePost, editPostRequestAction, votePostRequestAction} from "../actions/index";
import Modal from 'react-modal';

class Post extends Component {
  state = {
    deleteModalIsOpen: false,
    editModalIsOpen: false
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

  openDeleteModal = () => {
    this.buttonClicked = true;
    this.setState({deleteModalIsOpen: true});
  };

  afterOpenDeleteModal = () => {
    this.title.innerHTML = `Are you sure you want to delete "<span style='color: blue'>${this.props.post.title}</span>"?`
  };

  closeDeleteModal = (option) => {
    this.buttonClicked = true;
    this.setState({deleteModalIsOpen: false});
    if (option === 'delete') {
      this.props.deletePost(this.props.post.id);
      if (this.props.detailView) this.props.history.push('/');
    }
  };

  openEditModal = () => {
    this.buttonClicked = true;
    this.setState({editModalIsOpen: true});
  };

  afterOpenEditModal = () => {
    const {post} = this.props;
    this.titleInput.value = post.title;
    this.bodyInput.value = post.body;
  };

  closeEditModal = (option) => {
    this.buttonClicked = true;
    this.setState({editModalIsOpen: false});
    if (option === 'edit') {
      const {post} = this.props;
      let body = this.bodyInput.value;
      let title = this.titleInput.value;
      if (body !== '' && title !== '') {
        this.props.editPost(post.id, {body, title});
        //window.location.reload()
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
          <img src={EditButton} alt="Edit Post" onClick={this.openEditModal}/>
          <img src={DeleteButton} alt="Delete Post" onClick={this.openDeleteModal}/>
        </div>

        <Modal
          isOpen={this.state.deleteModalIsOpen}
          onAfterOpen={this.afterOpenDeleteModal}
          onRequestClose={this.closeDeleteModal}
          contentLabel="Example Modal"
          style={this.customStyles}
          ariaHideApp={false}
        >
          <h1 ref={title => this.title = title}>hi</h1>
          <button className="modal-btn destructive" onClick={() => {this.closeDeleteModal("delete")}}>DELETE</button>
          <button className="modal-btn" onClick={() => {this.closeDeleteModal("cancel")}}>CANCEL</button>
        </Modal>

        <Modal
          isOpen={this.state.editModalIsOpen}
          onAfterOpen={this.afterOpenEditModal}
          onRequestClose={this.closeEditModal}
          contentLabel="Example Modal"
          style={this.customStyles}
          ariaHideApp={false}
        >
          <input ref={input => this.titleInput = input}  onClick={() => {this.buttonClicked = true}}/>
          <textarea ref={input => this.bodyInput = input} onClick={() => {this.buttonClicked = true}}/>
          <button className="modal-btn destructive" onClick={() => {this.closeEditModal("edit")}}>EDIT</button>
          <button className="modal-btn" onClick={() => {this.closeEditModal("cancel")}}>CANCEL</button>
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
    deletePost: (id) => dispatch(deletePost(id)),
    editPost: (id, post) => dispatch(editPostRequestAction(id, post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);