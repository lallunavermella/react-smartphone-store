import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListProduct } from '../redux';
import { fetchProducts } from '../redux/thunks';

function ProductListPage() {
  const dispatch = useDispatch();
  const productList = useSelector(selectListProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>Product List Page</h2>
      {productList.isLoading && 'Loading'}
      {!productList.isLoading && productList.products.length}

    </div>
  );
}

export default ProductListPage;
