import React from 'react';
import { popularProducts } from '../../utils/data';
import { Container } from './ProductsElements';
import ProductItems from './ProductItems';

const Products = () => {
  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <ProductItems item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
