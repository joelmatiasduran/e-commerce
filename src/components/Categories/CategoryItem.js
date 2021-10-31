import React from 'react';
import { ContainerItem, Image, Info, Title, Button } from './CategoryElements';

const CategoryItem = ({ item }) => {
  return (
    <>
      <ContainerItem>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </ContainerItem>
    </>
  );
};

export default CategoryItem;
