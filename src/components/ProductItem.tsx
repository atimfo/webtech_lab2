import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductItem;
