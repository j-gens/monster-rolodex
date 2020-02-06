import React from 'react';
import './search.styles.css';

const Search = ({ placeholder, handleSearch }) => (
  <div className="search-bin">
    <input type="search" placeholder={placeholder} onChange={handleSearch} />
  </div>
)

export default Search;
