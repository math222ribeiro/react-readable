import {
  CATEGORIES_LOADED,
  POSTS_LOADED
} from '../actions';

import {combineReducers} from 'redux';

const categoriesInitialState = {
  all: [],
  loaded: false,
};
const postsInitialState = {
  all: [],
  loaded: false
};

function categories(state = categoriesInitialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      const { categories } = action;
      return {
        ...state,
        all: categories,
        loaded: true
     };

    default:
      return state;

  }
}

function posts(state = postsInitialState, action) {
  switch (action.type) {
    case POSTS_LOADED:
      const { posts } = action;
      return {
        ...state,
        all: posts,
        loaded: true
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});