import React, { Component } from 'react';
import NavBar from './NavBar';
import FilterBar from "./FilterBar";
import Posts from "./Posts";
import {Route} from 'react-router-dom';
import PostDetail from "./PostDetail";

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <div className="container">
          {['/', '/:category'].map(path => (
            <div key={path}>
              <Route exact path={path} component={FilterBar}/>
              <Route exact path={path} component={Posts}/>
            </div>
          ))}

          <Route exact path={'/:category/:post_id'} component={PostDetail}/>
        </div>
    </div>
    );
  }
}

export default App;
