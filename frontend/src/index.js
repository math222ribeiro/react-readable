import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import 'normalize.css';
import './css/index.css'
import reducer from "./reducers/index";
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// fetchCategories()
//   .then(res => res.json())
//   .then(categories => store.dispatch(loadCategories(categories.categories)));

// fetchCategories()
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.categories[0])
//   });

// fetch(api + '/categories', {headers})
//   .then((categories) => categories.json())
//   .then((categories) => {
//   console.log(categories)
//   });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
