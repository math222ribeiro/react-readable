import {
  CATEGORIES_LOADED,
  POSTS_LOADED
} from '../actions';

import {combineReducers} from 'redux';

const categoriesInitialState = {
  all: [],
  categoriesLoaded: false,
};
const postsInitialState = {
  all: [],
  postsLoaded: false
};

function categories(state = categoriesInitialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      const { categories } = action;
      return {
        ...state,
        all: categories,
        categoriesLoaded: true
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
        postsLoaded: true
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});