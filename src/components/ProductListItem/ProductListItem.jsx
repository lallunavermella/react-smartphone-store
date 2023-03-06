import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductListItem({
  product: {
    id, imgUrl, brand, model, price,
  },
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-full h-full border border-stone-500 rounded-lg bg-white flex flex-col justify-center items-center p-3">
        <img className="p-4" loading="lazy" src={imgUrl} alt={id} />
        <p>{brand}</p>
        <p>{model}</p>
        <p>{price}</p>

      </div>
    </Link>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductListItem;
