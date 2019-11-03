import React from 'react';
import ReposItem from './ReposItem';

const Repos = () => {
  return (
    <div style={{ margin: '0 5%' }}>
      <h1>Trending Repos</h1>
      <ReposItem />
      <ReposItem />
    </div>
  );
};

export default Repos;
