import React from "react";
import "./Styles/Search.css";

const Search = () => {
  return (
    <React.Fragment>
      <input type='text' name='query' placeholder='Search' />
      <select name='search_type'>
        <option value='title'>Title</option>
        <option value='author'>Author</option>
        <option value='genre'>Genre</option>
      </select>
      <button type='submit'>Search</button>
    </React.Fragment>
  );
};

export default Search;
