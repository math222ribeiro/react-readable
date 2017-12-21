import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeCategory, changeSortType, fetchCategoriesRequest} from "../actions/index";
import {Loading} from "./Loading";
import {capitalizeFirstLetter} from "../utils/functions";

class FilterBar extends Component {
  state = {
    order: 'newest',
  };

  handleChangeSortSelect = (event) => {
    const type = event.target.value;
    this.setState({order: type});
    this.props.changeOrder(type);
  };

  handleChangeCategoriesSelect = (event) => {
    let selectedCategory = event.target.value;
    this.props.changeCategory(selectedCategory);
    if (selectedCategory === 'all') selectedCategory = '';
    this.props.history.push('/' + selectedCategory);
  };

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    let {categoriesLoaded, categories, posts} = this.props;
    return (

      <div className="filter-container">
        <span className="matches-number">{posts.length}</span> matches
        {categoriesLoaded ? (
          <select className="category-select" value={this.props.categorySelected} onChange={this.handleChangeCategoriesSelect}>
            <option value="all">All</option>
            {categories.map((category) => (
              <option value={category.name} key={category.name}>{capitalizeFirstLetter(category.name)}</option>
            ))}
          </select>
        ) : (
          <Loading/>
        )}

        <select className="sort-select" value={this.state.filter} onChange={this.handleChangeSortSelect}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highestVote">Vote Score: Highest</option>
          <option value="lowestVote">Vote Score: Lowest</option>
        </select>

      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: categories.all,
    categoriesLoaded: categories.loaded,
    posts: posts.filteredPosts,
    categorySelected: posts.categorySelected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategoriesRequest()),
    changeOrder: (sortType) => dispatch(changeSortType(sortType)),
    changeCategory: (newCategory) => dispatch(changeCategory(newCategory))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);