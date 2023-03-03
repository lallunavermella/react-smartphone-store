import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { selectProductDetail } from '../redux';
import { fetchProductDetail } from '../redux/thunks';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { product: productId } = useParams();
  const productDetail = useSelector(selectProductDetail);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, []);

  return (
    <div className="flex flex-col items-center h-full w-full p-4">
      <h2 className="text-xl">Product Details Page</h2>
      <div className="w-full justify-between mt-4">
        {productDetail.isLoading && <div>Loading</div>}
        {!productDetail.isLoading && <ProductDetail productDetail={productDetail.product} />}

      </div>
    </div>
  );
}

export default ProductDetailPage;
