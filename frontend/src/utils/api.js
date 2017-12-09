const api = 'http://localhost:3001';
let headers = new Headers();
headers.append('Authorization', 'auth');

export const fetchCategories = () => (fetch(api + '/categories', {headers}));

export const fetchPosts = () => (fetch(api + '/posts', {headers}));
