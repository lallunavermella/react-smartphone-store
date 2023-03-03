import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem/ProductListItem';
import Search from '../components/Search/Search';
import { selectListProduct } from '../redux';
import { fetchProducts } from '../redux/thunks';

function ProductListPage() {
  const dispatch = useDispatch();
  const productList = useSelector(selectListProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex flex-col items-center h-full w-full p-4">
      <div className="w-full flex flex-row justify-between">
        <h2>
          Product list
          {!productList.isLoading && `: ${productList.products.length}`}
        </h2>
        <Search />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-4">
        {productList.isLoading && 'Loading'}
        {!productList.isLoading && productList.products.map(
          (product) => (<ProductListItem product={product} key={product.id} />),
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
