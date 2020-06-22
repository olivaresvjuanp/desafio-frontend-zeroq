import React from 'react';

import Header from './Header';
import BranchOfficesContainer from '../containers/BranchOfficesContainer';
import SearchContainer from '../containers/SearchContainer';

import './App.scss';

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchContainer />
      <BranchOfficesContainer />
    </React.Fragment>
  );
}

export default App;
