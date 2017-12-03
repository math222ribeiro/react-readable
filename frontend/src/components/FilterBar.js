import React, {Component} from 'react';

class FilterBar extends Component {
  render() {
    return (
      <div className="filter-container">
        <span className="matches-number">0</span> matches
        <select className="category-select">
          <option>o</option>
          <option>o</option>
          <option>o</option>
        </select>

        <select className="sort-select">
          <option>o</option>
          <option>o</option>
          <option>o</option>
        </select>

      </div>
    )
  }
}

export default FilterBar;