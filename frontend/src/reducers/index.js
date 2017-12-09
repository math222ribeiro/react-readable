import {
  CATEGORIES_LOADED,
  POSTS_LOADED,
  VOTE_POST
} from '../actions';

import {combineReducers} from 'redux';
import {LOADING_POSTS} from "../actions/index";

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
    case VOTE_POST:
      const {post} = action;
      return {
        ...state,
        all: [...state.all.filter((aPost) => post.id !== aPost.id), post]
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});