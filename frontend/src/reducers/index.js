import {
  CATEGORIES_LOADED,
  POSTS_LOADED,
  VOTE_POST
} from '../actions';
import {sortPostBy} from '../utils/arrayutil';
import {combineReducers} from 'redux';
import {CHANGE_FILTER} from "../actions/index";

const categoriesInitialState = {
  all: [],
  loaded: false,
};
const postsInitialState = {
  all: [],
  loaded: false,
  sortedBy: "newest"
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
        all: sortPostBy(state.sortedBy, posts),
        loaded: true
      };
    case VOTE_POST:
      const {post} = action;
      return {
        ...state,
        all: sortPostBy(state.sortedBy, [...state.all.filter((aPost) => post.id !== aPost.id), post])
      };
    case CHANGE_FILTER:
      const {filterName} = action;
      return {
        ...state,
        sortedBy: filterName,
        all: sortPostBy(filterName, state.all.slice())
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});