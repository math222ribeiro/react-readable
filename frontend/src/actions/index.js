import {deletePostRequest, fetchCategories, fetchPosts, votePostRequest} from "../utils/api";

export const CATEGORIES_LOADED = "CATEGORIES_LOADED";
export const POSTS_LOADED = "POSTS_LOADED";
export const VOTE_POST = "VOTE_POST";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const POST_DELETED = "POST_DELETED";

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

export const deletePostAction = (id) => ({
  type: POST_DELETED,
  id
});

export const deletePost = (id) => dispatch => (
  deletePostRequest(id)
    .then(res => res.json())
    .then(res => dispatch(deletePostAction(id)))
);

export const changeSortType = (sortType) => ({
  type: CHANGE_ORDER,
  sortType
});

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  category
});