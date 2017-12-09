import React, { Component } from 'react'
import PlusSign from '../assets/Plus-Sign.png';

class NavBar extends Component {
  render() {
    return (
      <header className="nav">
        <div className="logo-container">
          <a href="">Readable</a>
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