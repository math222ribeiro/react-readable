import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCategoriesAction} from "../actions/index";
import {Loading} from "./Loading";

class FilterBar extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    let {categoriesLoaded, categories} = this.props;
    return (

      <div className="filter-container">
        <span className="matches-number">0</span> matches
        {categoriesLoaded ? (
          <select className="category-select">
            {categories.map((category) => (
              <option value={category.name} key={category.name}>{category.name}</option>
            ))}
          </select>
        ) : (
          <Loading/>
        )}

        <select className="sort-select">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Vote Score: Highest</option>
          <option>Vote Score: Lowest</option>
        </select>

      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.all,
    categoriesLoaded: categories.categoriesLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategoriesAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);