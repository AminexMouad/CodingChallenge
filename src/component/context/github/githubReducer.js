import { GET_REPOS, SET_LOADING, SET_CURRENT_PAGE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
