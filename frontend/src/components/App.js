import React, { Component } from 'react';
import NavBar from './NavBar';
import FilterBar from "./FilterBar";
import Posts from "./Posts";
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <div className="container">
          <Route path="/" component={FilterBar} />
          <Route exact path="/:category" component={Posts} />
          <Route exact path="/" component={Posts} />
        </div>
    </div>
    );
  }
}

export default App;
