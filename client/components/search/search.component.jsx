import React from 'react';
import './search.styles.css';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="search-bin">
        <input type="search" placeholder="search monsters" />
      </div>
    )
  }
}

export default Search;
