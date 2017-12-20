import React, {Component} from 'react';
import Comment from "./Comment";
import {connect} from 'react-redux';
import {loadCommentsRequest} from "../actions/index";

class Comments extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const {error, loading, post} = this.props;
    if (!error && !loading) {
      this.props.getAllComments(post.id);
      this.setState({loading: false})
    }
  }

  render() {
    return (
      this.state.loading ? (
        "Loading"
      ) : (
        <div className="comments-container">
          <h3>{this.props.comments.length} comments</h3>
          {
            this.props.comments.map(comment => (
              <Comment comment={comment} key={comment.id}/>
            ))
          }
        </div>
      )

    )
  }
}

function mapStateToProps({comments}) {
 return {
   post: comments.parentPost,
   comments: comments.all
 }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllComments: (id) => dispatch(loadCommentsRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);