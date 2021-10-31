import React from 'react';
import { Container } from './CategoryElements';
import { categories } from '../../utils/data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
