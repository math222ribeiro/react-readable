import React, { Component } from 'react'
import PlusSign from '../assets/Plus-Sign.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeCategory} from "../actions/index";

class NavBar extends Component {
  render() {
    return (
      <header className="nav">
        <div className="logo-container">
          <Link to="/" onClick={() => {this.props.changeCategory('all')}}>Readable</Link>
        </div>

        <div className="new-btn">
          <Link to="/new">
            <img src={PlusSign} alt="New Post"/>
            <span className="new-text">New</span>
          </Link>
        </div>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCategory: (newCategory) => dispatch(changeCategory(newCategory))
  }
}

export default connect(null, mapDispatchToProps)(NavBar);