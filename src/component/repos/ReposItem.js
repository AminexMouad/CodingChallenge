import React, { useRef, useState, useLayoutEffect } from 'react';
import Moment from 'react-moment';
const ReposItem = props => {
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
        src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'
        alt='owner=img'
        style={{ height: dimensionsHeight }}
      />
      <div className='repos-item-infos-body'>
        <b className='title'>username/Repo name</b>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed
          veritatis magnam nisi explicabo maiores temporibus, minima, similique
          repellendus maxime dicta ratione reprehenderit, ipsam hic adipisci
          itaque cupiditate dolorem autem.
        </p>
        <div className='repos-item-info-footer'>
          <div className='tags'>
            <i className='fas fa-star'></i> <span>15648</span>
          </div>
          <div className='tags extra'>
            <i className='fas fa=exclamation'></i>
            <span>1575</span>
          </div>
          <span className='date'>
            Submited <Moment fromNow>2019-10-10T07:40:48Z</Moment> by Usename
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReposItem;
