const api = 'http://localhost:3001';
let headers = {
  'Authorization': 'auth',
  'Accept': 'application/json'
};


export const fetchCategories = () => (fetch(api + '/categories', {headers}));

export const fetchPosts = () => (fetch(api + '/posts', {headers}));

export const votePostRequest = (id, option) => (fetch(api + '/posts/' + id, {
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({
    option: option
  })
}));

export const deletePostRequest = (id) => (
  fetch(api + '/posts/' + id, {
    headers: headers,
    method: "DELETE"
  })
);

export const getPost = (id) => (fetch(api + '/posts/' + id, {headers}));

export const getPostComments = (postId) => (fetch(api + '/posts/' + postId + '/comments', {headers}));

export const voteCommentRequest = (id, option) => (fetch(api + '/comments/' + id, {
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({
    option: option
  })
}));