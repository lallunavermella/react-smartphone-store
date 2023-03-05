/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
        Search
      </label>
      <input
        type="search"
        name="search"
        id="search"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search for a product"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Search;
