import {
  addCommentRequest, addPostRequest, deleteCommentRequest,
  deletePostRequest, editCommentRequest, fetchCategories, fetchPosts, getPostComments, voteCommentRequest,
  votePostRequest
} from "../utils/api";

export const CATEGORIES_LOADED = "CATEGORIES_LOADED";
export const POSTS_LOADED = "POSTS_LOADED";
export const VOTE_POST = "VOTE_POST";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const POST_DELETED = "POST_DELETED";
export const COMMENTS_LOADED = "COMMENTS_LOADED";
export const SET_PARENT_POST = "SET_PARENT_POST";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_POST = "ADD_POST";
export const EDIT_COMMENT = "EDIT_COMMENT";

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

export const postCommentsLoaded = (comments) => ({
  type: COMMENTS_LOADED,
  comments
});

export const loadCommentsRequest = (postId) => dispatch => (
  getPostComments(postId)
    .then(res => res.json())
    .then(res => dispatch(postCommentsLoaded(res)))
);

export const setParentPost = (post) => ({
  type: SET_PARENT_POST,
  post
});

export const voteCommentAction = (comment) => ({
  type: VOTE_COMMENT,
  comment,
});

export const voteCommentRequestAction = (id, option) => dispatch => (
  voteCommentRequest(id, option)
    .then(res => res.json())
    .then((comment) => dispatch(voteCommentAction(comment)))
);

export const addCommentAction = (comment) => ({
  type: ADD_COMMENT,
  comment
});


export const addCommentRequestAction = (comment) => dispatch => (
  addCommentRequest(comment)
    .then(res => res.json())
    .then((comment) => dispatch(addCommentAction(comment)))
);

export const deleteCommentAction = (deleted) => ({
  type: DELETE_COMMENT,
  deleted
});

export const deleteCommentRequestAction = (id) => dispatch => (
  deleteCommentRequest(id)
    .then(res => res.json())
    .then(comment => dispatch(deleteCommentAction(comment)))
);

export const addPostAction = (post) => ({
  type: ADD_POST,
  post
});


export const addPostRequestAction = (post) => dispatch => (
  addPostRequest(post)
    .then(res => res.json())
    .then((post) => dispatch(addPostAction(post)))
);

export const editCommentAction = (edited) => ({
  type: EDIT_COMMENT,
  edited
});

export const editCommentRequestAction = (id, comment) => dispatch => (
  editCommentRequest(id, comment)
    .then(res => res.json())
    .then(comment => dispatch(editCommentAction(comment)))
);