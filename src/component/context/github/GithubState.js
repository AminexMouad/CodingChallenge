import React, { useReducer } from 'react';
import axios from 'axios';

import GithubReducer from './githubReducer';
import { SET_LOADING, GET_REPOS, SET_CURRENT_PAGE } from '../types';
import githubContext from './githubContext';

const GithubState = props => {
  const initialState = {
    repos: [],
    loading: true,
    currentPage: 1
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Fetching trending repos
  const fetchData = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2019-10-01&sort=stars&order=desc&page=${initialState.currentPage}&per_page=10`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data.items
    });
  };

  //Fetch next page
  const nextPage = async page => {
    setLoading();
    setCurrentPage(page);
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2019-10-01&sort=stars&order=desc&page=${page}&per_page=10`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data.items
    });
  };

  //Fetch Previous page
  const previousPage = async page => {
    setLoading();
    setCurrentPage(page);
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2019-10-01&sort=stars&order=desc&page=${page}&per_page=10`
    );
    dispatch({ type: GET_REPOS, payload: res.data.items });
  };

  //Display loading while fetching data
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Pointing current page
  const setCurrentPage = page =>
    dispatch({ type: SET_CURRENT_PAGE, payload: page });

  return (
    <githubContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        currentPage: state.currentPage,
        fetchData,
        nextPage,
        previousPage
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
