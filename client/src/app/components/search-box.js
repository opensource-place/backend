import React from 'react';

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='max-w-max p-2'
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
