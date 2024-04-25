import React from "react";
import "./Styles/Search.css";

const Search = () => {
  return (
    <React.Fragment>
      <div className='search-input'>
        <input type='text' name='query' placeholder='Search' />
        <button className="search-button" type='submit'>Search</button>
      </div>
    </React.Fragment>
  );
};

export default Search;
