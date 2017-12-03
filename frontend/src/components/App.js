import React, { Component } from 'react';
import NavBar from './NavBar';
import FilterBar from "./FilterBar";
import Posts from "./Posts";

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <div className="container">
          <FilterBar/>
          <Posts/>
        </div>
    </div>
    );
  }
}

export default App;
