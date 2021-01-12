import React from 'react';

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search-box mb-2 mt-12 h-12 w-full rounded p-2'
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
