import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <div className="w-[200px] h-[40px] bg-pink-600">
      <form onSubmit={onFormSubmit}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Search;
