import React from 'react';
import './App.css';
import Home from './component/pages/Home';
import GithubState from './component/context/github/GithubState';
function App() {
  return (
    <GithubState>
      <Home />
    </GithubState>
  );
}

export default App;
