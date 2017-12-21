import React, {Component} from 'react'
import {capitalizeFirstLetter, guid} from "../utils/functions";
import {connect} from 'react-redux';
import {addPostRequestAction, changeCategory, fetchCategoriesRequest} from "../actions/index";

class NewPostForm extends Component {

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchCategories();
    }
  }

  handleAddPost = (event) => {
    event.preventDefault();
    let title = this.titleInput.value;
    let body = this.bodyInput.value;
    let author = this.authorInput.value;
    let category = this.selectCategory.value;

    if (title !== '' && author !== '' && body !== '') {
      let id = guid();
      let timestamp = Date.now();
      this.props.addPost({
        title,
        body,
        author,
        category,
        id,
        timestamp
      });
      alert('Post added!');
      this.props.history.push('/');
      this.props.changeCategory('all');
    }
  };

  render() {
    return (
      <form>
        <h2
          style={{
            padding: '20px 0',
          }}
        >
          New Post
        </h2>
        <input placeholder="Author" ref={input => this.authorInput = input}/>
        <input placeholder="Title" ref={input => this.titleInput = input}/>
        <select
          style={{
            width: '100%',
            padding: '0',
            margin: '0'
          }}
          ref={input => this.selectCategory = input}
        >
          {this.props.categories.map(category => (
            <option value={category.name} key={category.name}>{capitalizeFirstLetter(category.name)}</option>
          ))}
        </select>
        <textarea placeholder="Body" ref={input => this.bodyInput = input} />
        <button className="post-button" onClick={this.handleAddPost}>POST</button>
      </form>
    )
  }
}


function mapStateToProps({ categories }) {
  return {
    categories: categories.all,
    loaded: categories.loaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => dispatch(addPostRequestAction(post)),
    changeCategory: (newCategory) => dispatch(changeCategory(newCategory)),
    fetchCategories: () => dispatch(fetchCategoriesRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);