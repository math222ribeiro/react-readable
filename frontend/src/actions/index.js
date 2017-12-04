import {fetchCategories} from "../utils/api";

export const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const fetchCategoriesAction = () => dispatch => (
  fetchCategories()
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data.categories)))
);

