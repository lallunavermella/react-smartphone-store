import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useGetProductDetailQuery } from '../redux/api';

function ProductDetailPage() {
  const { product: productId } = useParams();
  const {
    data, error, isLoading, refetch,
  } = useGetProductDetailQuery(productId);

  return (
    <div className="flex flex-col items-center h-full w-full p-4">
      <h2 className="text-xl">Product Details Page</h2>
      <div className="w-full justify-between mt-4">
        {isLoading && <div>Loading</div>}
        {error && (
        <div>
          Error loading product. Try again
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
        {!isLoading && !error && <ProductDetail productDetail={data} />}

      </div>
    </div>
  );
}

export default ProductDetailPage;
