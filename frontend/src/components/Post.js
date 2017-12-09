import React, {Component} from 'react';
import UpVoteButton from '../assets/Plus-Button.png';
import DownVoteButton from '../assets/Minus-Button.png';
import EditButton from '../assets/Edit-Button.png';
import DeleteButton from '../assets/Delete-Button.png';
import {connect} from 'react-redux';
import {votePostRequestAction} from "../actions/index";
class Post extends Component {
  handleVote(option) {
    this.props.vote(
      this.props.post.id,
      option
    )
  }

  render() {
    const {post} = this.props;
    return (
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <h4 className="post-author">{post.author}</h4>
        <p className="post-body">
          {post.body}
        </p>

        <p className="post-vc">
          {post.voteScore} Votes - {post.commentCount} Comments
        </p>

        <div className="post-buttons">
          <img src={UpVoteButton} style={{marginLeft: '0px'}} onClick={() => {this.handleVote("upVote")}} />
          <img src={DownVoteButton} onClick={() => {this.handleVote("downVote")}}/>
          <img src={EditButton} />
          <img src={DeleteButton} />
        </div>
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
    vote: (id, option) => dispatch(votePostRequestAction(id, option))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);