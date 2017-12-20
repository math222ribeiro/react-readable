import {
  CATEGORIES_LOADED,
  POSTS_LOADED,
  VOTE_POST,
  POST_DELETED,
  COMMENTS_LOADED
} from '../actions';
import {filterPostsBy, sortPostBy} from '../utils/arrayutil';
import {combineReducers} from 'redux';
import {CHANGE_CATEGORY, CHANGE_ORDER, SET_PARENT_POST, VOTE_COMMENT} from "../actions/index";

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

const postCommentsInitialState = {
  all: [],
  parentPost: {}
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

function comments(state = postCommentsInitialState, action) {
  switch (action.type) {
    case COMMENTS_LOADED:
      const {comments} = action;
      return {
        ...state,
        all: sortPostBy("newest", comments)
      };

    case SET_PARENT_POST:
      const {post} = action;
      return {
        ...state,
        parentPost: post
      };

    case VOTE_COMMENT:
      const {comment} = action;
      return {
        ...state,
        all: sortPostBy("newest", [...state.all.filter((aComment) => comment.id !== aComment.id), comment])
      };
    default:
      return state;
  }
}
export default combineReducers({
  posts,
  categories,
  comments
});