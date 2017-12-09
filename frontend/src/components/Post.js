import React, {Component} from 'react';
import UpVoteButton from '../assets/Plus-Button.png';
import DownVoteButton from '../assets/Minus-Button.png';
import EditButton from '../assets/Edit-Button.png';
import DeleteButton from '../assets/Delete-Button.png';

class Post extends Component {
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
          <img src={UpVoteButton} style={{marginLeft: '0px'}} />
          <img src={DownVoteButton} />
          <img src={EditButton} />
          <img src={DeleteButton} />
        </div>
      </div>
    )
  }
}

export default Post;