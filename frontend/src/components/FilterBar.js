import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeCategory, changeSortType, fetchCategoriesRequest} from "../actions/index";
import {Loading} from "./Loading";
import {capitalizeFirstLetter} from "../utils/arrayutil";

class FilterBar extends Component {
  state = {
    order: 'newest',
    category: "all"
  };

  handleChangeSortSelect = (event) => {
    const type = event.target.value;
    this.setState({order: type});
    this.props.changeOrder(type);
  };

  handleChangeCategoriesSelect = (event) => {
    const selectedCategory = event.target.value;
    this.setState({category: selectedCategory});
    this.props.changeCategory(selectedCategory);
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
          <select className="category-select" value={this.state.category} onChange={this.handleChangeCategoriesSelect}>
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
    posts: posts.filteredPosts
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