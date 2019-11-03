import React, { useContext, useEffect } from 'react';
import ReposItem from './ReposItem';
import GithubContext from '../context/github/githubContext';
import LoadingGif from '../assets/loading.gif';
const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { loading, repos } = githubContext;

  useEffect(() => {
    githubContext.fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderData = () => {
    if (loading) {
      return (
        <img
          src={LoadingGif}
          alt='loading'
          height={200}
          style={{ alignSelf: 'center' }}
        />
      );
    } else {
      return repos.map(repo => {
        return <ReposItem key={repo.id} repo={repo} />;
      });
    }
  };

  return (
    <div style={{ margin: '0 5%' }}>
      <h1>Trending Repos</h1>
      {renderData()}
    </div>
  );
};

export default Repos;
