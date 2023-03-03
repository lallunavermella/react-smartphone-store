import React from 'react';
import PropTypes from 'prop-types';

function Select({ title, options = [] }) {
  return (
    <div>
      <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <select
        id="product"
        name="product"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map((option) => <option key={option.name}>{option.name}</option>)}

      </select>
    </div>
  );
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};

export default Select;
