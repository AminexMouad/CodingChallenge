import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';

const Pagination = () => {
  const githubContext = useContext(GithubContext);
  const [next] = useState(githubContext.currentPage + 1);
  const [previous] = useState(githubContext.currentPage - 1);

  const nextPage = () => {
    githubContext.nextPage(next);
  };

  const previousPage = () => {
    githubContext.previousPage(previous);
  };

  return (
    <ul className='pagination'>
      <li
        className={
          githubContext.currentPage !== 1
            ? 'pagination-item'
            : 'pagination-item not-allowed'
        }
        onClick={githubContext.currentPage !== 1 ? previousPage : undefined}
      >
        Previous
      </li>
      <li className='pagination-item item-extra' onClick={nextPage}>
        Next
      </li>
    </ul>
  );
};

export default Pagination;
