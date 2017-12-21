import React, { Component } from 'react';
import NavBar from './NavBar';
import FilterBar from "./FilterBar";
import Posts from "./Posts";
import {Route} from 'react-router-dom';
import PostDetail from "./PostDetail";
import NewPostForm from "./NewPostForm";
import {Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/new" component={NewPostForm}/>
            <Route exact path="/:category" component={FilterBar}/>
          </Switch>

          <Route exact path="/" component={FilterBar}/>
          <Route exact path="/" component={Posts}/>
          <Route exact path="/:category" component={Posts}/>
          <Route exact path={'/:category/:post_id'} component={PostDetail}/>
        </div>
    </div>
    );
  }
}

export default App;
