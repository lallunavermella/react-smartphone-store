import React from 'react';
import PropTypes from 'prop-types';

function Select({
  title, options = [], value, setValue,
}) {
  const onChange = (event) => setValue(
    options.find((o) => o.code === parseInt(event.target.value, 10)),
  );

  return (
    <div>
      <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <select
        value={value.code}
        onChange={onChange}
        id="product"
        name="product"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map((option) => (
          <option key={option.name} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.number,
  })).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Select;
