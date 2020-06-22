import React from 'react';

import { SearchState } from '../store/search/types';

import './Search.scss';

interface SearchProps {
  searchReducer: SearchState;
  setFilter: any;
}

const Search: React.FunctionComponent<SearchProps> = props => {
  return (
    <div id="search-container">
      <div>
        <div className="material-icons-container">
          <i className="material-icons">search</i>
        </div>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            props.setFilter(event.target.value);
          }}
          placeholder="Buscar sucursal"
          type="text"
          value={props.searchReducer.filter}
        />
      </div>
    </div>
  );
}

export default Search;
