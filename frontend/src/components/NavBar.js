import React, { Component } from 'react'
import PlusSign from '../assets/Plus-Sign.png';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header className="nav">
        <div className="logo-container">
          <Link to="/">Readable</Link>
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

export default NavBar