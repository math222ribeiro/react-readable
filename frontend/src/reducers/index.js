import {
  LOAD_CATEGORIES
} from '../actions';

const initialState = {
  categories: [],
  categoriesLoaded: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      const { categories } = action;
      return {
        ...state,
        categories: categories,
        categoriesLoaded: true
     };

    default:
      return state;

  }
}

export default reducer;