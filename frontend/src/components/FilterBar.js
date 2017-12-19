import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeFilter, fetchCategoriesRequest} from "../actions/index";
import {Loading} from "./Loading";

class FilterBar extends Component {
  state = {
    filter: 'newest'
  };

  handleChange = (event) => {
    const newFilter = event.target.value;
    this.setState({filter: newFilter});
    this.props.changeFilter(newFilter);
  };

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

        <select className="sort-select" value={this.state.filter} onChange={this.handleChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highestVote">Vote Score: Highest</option>
          <option value="lowestVote">Vote Score: Lowest</option>
        </select>

      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.all,
    categoriesLoaded: categories.loaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategoriesRequest()),
    changeFilter: (filterName) => dispatch(changeFilter(filterName))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);