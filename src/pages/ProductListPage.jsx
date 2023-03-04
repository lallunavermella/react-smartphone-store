import React from 'react';
import ProductListItem from '../components/ProductListItem/ProductListItem';
import Search from '../components/Search/Search';
import { useGetProductsQuery } from '../redux/api';

function ProductListPage() {
  const {
    data, error, isLoading, refetch,
  } = useGetProductsQuery();
  return (
    <div className="flex flex-col items-center h-full w-full p-4">
      <div className="w-full flex flex-row justify-between">
        <h2>
          Product list
          {!isLoading && `: ${data.length}`}
        </h2>
        <Search />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-4">
        {isLoading && 'Loading'}
        {error && (
        <div>
          Error loading products. Try again
          {' '}
          <button
            type="button"
            onClick={() => {
              refetch();
            }}
          >
            Refresh
          </button>
        </div>
        )}
        {!isLoading && !error && data.map(
          (product) => (<ProductListItem product={product} key={product.id} />),
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
