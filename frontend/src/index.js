import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import 'normalize.css';
import './css/index.css'
import reducer from "./reducers/index";
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
// import {addCommentRequest} from "./utils/api";
// import {getPostComments} from "./utils/api";
// import {deletePostRequest} from "./utils/api";
// import {fetchPosts, votePostRequest} from "./utils/api";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// getPostComments('8xf0y6ziyjabvozdd253nd')
//   .then(res => res.json())
//   .then(res => console.log(res));
// addCommentRequest({
//   id: '1',
//   timestamp: Date.now(),
//   body: 'HELLO WORLD',
//   author: 'MATHEUS',
//   parentId: '8xf0y6ziyjabvozdd253nd'
// })
//   .then(res => res.json())
//   .then(res => console.log(res));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// fetchCategories()
//   .then(res => res.json())
//   .then(categories => store.dispatch(loadCategories(categories.categories)));

// fetchCategories()
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.categories[0])
//   });
// const api = 'http://localhost:3001';
// let headers = new Headers();
// headers.append('Authorization', 'auth');
//
// fetch(api + '/categories', {headers})
//   .then((categories) => categories.json())
//   .then((categories) => {
//   console.log(categories)
//   });
// fetchPosts()
//   .then(res => res.json())
//   .then((posts) => {
//     console.log(posts);
//   });
//
// votePostRequest("8xf0y6ziyjabvozdd253nd", "upVote")
//   .then(res => (res.json()))
//   .then(res=> console.log(res));

// deletePostRequest('8xf0y6ziyjabvozdd253nd')
//   .then(res => res.json())
//   .then(res => console.log(res));