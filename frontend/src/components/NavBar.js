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
          <a href="">
            <img src={PlusSign} alt="New Post"/>
            <span className="new-text">New</span>
          </a>
        </div>
      </header>
    )
  }
}

export default NavBar