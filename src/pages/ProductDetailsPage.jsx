import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { product: productId } = useParams();
  return (
    <div>
      <h2>Product Details Page</h2>
      <div className="py-8 text-black">
        Product:
        {' '}
        {productId}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
