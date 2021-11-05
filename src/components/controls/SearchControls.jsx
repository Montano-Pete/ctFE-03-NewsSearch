import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ searchInput, onSearchInputChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="searchInput">Search Input</label>
    <input
      id="searchInput"
      type="text"
      value={searchInput}
      onChange={onSearchInputChange}
    />
    <button>Submit</button>
  </form>
);

SearchControls.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchControls;
