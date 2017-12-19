import {fetchCategories, fetchPosts, votePostRequest} from "../utils/api";

export const CATEGORIES_LOADED = "CATEGORIES_LOADED";
export const POSTS_LOADED = "POSTS_LOADED";
export const VOTE_POST = "VOTE_POST";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const loadCategories = categories => ({
  type: CATEGORIES_LOADED,
  categories
});

export const fetchCategoriesRequest = () => dispatch => (
  fetchCategories()
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data.categories)))
);

export const loadPosts = posts => ({
  type: POSTS_LOADED,
  posts
});

export const fetchPostsRequest = () => dispatch => (
  fetchPosts()
    .then(res => res.json())
    .then(posts => dispatch(loadPosts(posts)))
);

export const votePostAction = (post) => ({
  type: VOTE_POST,
  post,
});


export const votePostRequestAction = (id, option) => dispatch => (
  votePostRequest(id, option)
    .then(res => res.json())
    .then((post) => dispatch(votePostAction(post)))
);

export const changeFilter = (filterName) => ({
  type: CHANGE_FILTER,
  filterName
});