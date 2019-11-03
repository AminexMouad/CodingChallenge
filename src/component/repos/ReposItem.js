import React, { useRef, useState, useLayoutEffect } from 'react';
import Moment from 'react-moment';
const ReposItem = ({ repo }) => {
  const targetRef = useRef();
  const [dimensionsHeight, setDimensionHeight] = useState(0);
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensionHeight(targetRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className='repo-item' ref={targetRef}>
      <img
        src={repo.owner.avatar_url}
        alt='owner=img'
        style={{ height: dimensionsHeight }}
      />
      <div className='repos-item-infos-body'>
        <b className='title'>{repo.full_name}</b>
        <p className='paragraph'>{repo.description}</p>
        <div className='repos-item-info-footer'>
          <div className='tags'>
            <i className='fas fa-star'></i> <span>{repo.stargazers_count}</span>
          </div>
          <div className='tags extra'>
            <i className='fas fa-exclamation'></i>{' '}
            <span>{repo.open_issues}</span>
          </div>
          <span className='date'>
            Submited <Moment fromNow>{repo.created_at}</Moment> by{' '}
            {repo.owner.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReposItem;
