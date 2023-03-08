import React, { useState } from 'react';
import ProductListItem from '../components/ProductListItem/ProductListItem';
import Search from '../components/Search/Search';
import { useGetProductsQuery } from '../redux/api';

function ProductListPage() {
  const {
    data, error, isLoading, refetch,
  } = useGetProductsQuery();
  const [query, setQuery] = useState('');

  const filteredArray = () => data
    .filter((product) => {
      if (query === '') return true;
      return product.model.toLowerCase().includes(query.toLowerCase())
            || product.brand.toLowerCase().includes(query.toLowerCase());
    })
    .map(
      (product) => (<ProductListItem product={product} key={product.id} />),
    );

  return (

    <div className="flex flex-col items-center h-full w-full p-4">
      <div className="w-full flex flex-row justify-between">
        <h2>
          Product list
          {!isLoading && `: ${filteredArray().length}`}
        </h2>
        <Search onSearch={setQuery} />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-4">
        {isLoading && 'Loading'}
        {error && (
        <div>
          Error loading products. Try again
          <button
            type="button"
            className='className="rounded bg-white mt-4 py-1 px-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"'
            onClick={() => {
              refetch();
            }}
          >
            Refresh
          </button>
        </div>
        )}
        {!isLoading && !error && filteredArray()}
      </div>
    </div>
  );
}

export default ProductListPage;
