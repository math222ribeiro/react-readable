import {
  CATEGORIES_LOADED,
  POSTS_LOADED,
  VOTE_POST,
  POST_DELETED
} from '../actions';
import {filterPostsBy, sortPostBy} from '../utils/arrayutil';
import {combineReducers} from 'redux';
import {CHANGE_CATEGORY, CHANGE_ORDER} from "../actions/index";

const categoriesInitialState = {
  all: [],
  loaded: false,
};
const postsInitialState = {
  all: [],
  filteredPosts: [],
  loaded: false,
  sortedBy: "newest",
  categorySelected: "all"
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
        filteredPosts: filterPostsBy(
          state.categorySelected,
          sortPostBy(state.sortedBy, posts)
        ),
        loaded: true
      };
    case VOTE_POST:
      const {post} = action;
      const newArray = [...state.all.filter((aPost) => post.id !== aPost.id), post];
      return {
        ...state,
        all: newArray,
        filteredPosts: filterPostsBy(
          state.categorySelected,
          sortPostBy(state.sortedBy, newArray)
        )
      };
    case CHANGE_ORDER:
      const {sortType} = action;
      return {
        ...state,
        sortedBy: sortType,
        filteredPosts: filterPostsBy(
          state.categorySelected,
          sortPostBy(sortType, state.all.slice())
        )
      };
    case CHANGE_CATEGORY:
      const {category} = action;
      return {
        ...state,
        categorySelected: category,
        filteredPosts: filterPostsBy(
          category,
          sortPostBy(state.sortedBy, state.all.slice())
        )
      };
    case POST_DELETED:
      const {id} = action;
      let array = state.all.filter(post => post.id !== id);
      return {
        ...state,
        all: array,
        filteredPosts: filterPostsBy(
          state.categorySelected,
          sortPostBy(state.sortedBy, array.slice())
        )
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});