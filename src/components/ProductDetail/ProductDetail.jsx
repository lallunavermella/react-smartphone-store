import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';

function ProductDetail({
  productDetail: {
    imgUrl, model, brand, price, cpu, ram, os, displayResolution, battery, dimentions, weight,
    primaryCamera, secondaryCmera, options,
  },
}) {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
      <div className="px-10">
        <img src={imgUrl} alt={model} className="border border-spacing-1 border-red-100" />
      </div>
      <div className="flex-col p-4">
        {model && (
        <div className="pb-2">
          {`Model: ${model}`}
        </div>
        )}
        {brand && (
        <div className="pb-2">
          {`Brand: ${brand}`}
        </div>
        )}
        {price && (
        <div className="pb-2">
          {`Price: ${price}`}
        </div>
        )}
        {cpu && (
        <div className="pb-2">
          {`CPU: ${cpu}`}
        </div>
        )}
        {ram && (
        <div className="pb-2">
          {`RAM: ${ram}`}
        </div>
        )}
        {os && (
        <div className="pb-2">
          {`OS: ${os}`}
        </div>
        )}
        {displayResolution && (
        <div className="pb-2">
          {`Display Resolution: ${displayResolution}`}
        </div>
        )}
        {battery && (
        <div className="pb-2">
          {`Battery: ${battery}`}
        </div>
        )}
        {primaryCamera && (
        <div className="pb-2">
          {`Primary Camera: ${primaryCamera}`}
        </div>
        )}
        {secondaryCmera && (
        <div className="pb-2">
          {`Secondary Camera: ${secondaryCmera}`}
        </div>
        )}
        {dimentions && (
        <div className="pb-2">
          {`Dimentions: ${dimentions}`}
        </div>
        )}
        {weight && (
        <div className="pb-2">
          {`Weight: ${weight}`}
        </div>
        )}
      </div>
      <div className="px-3">
        <Select title="Colors" options={options?.colors} />
        <Select title="Storage" options={options?.storages} />
        <button type="submit" className="rounded bg-white mt-4 py-1 px-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={() => console.log('button clicked')}>
          ADD CART
        </button>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  productDetail: PropTypes.shape({
    imgUrl: PropTypes.string,
    model: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
    primaryCamera: PropTypes.arrayOf(PropTypes.string),
    secondaryCmera: PropTypes.string,
    options: PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
      storages: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    }),
  }).isRequired,
};

export default ProductDetail;
