import React from 'react';
import {
  ContainerProduct,
  Circle,
  Image,
  Info,
  Icon,
} from './ProductsElements';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';

const ProductItems = ({ item }) => {
  return (
    <>
      <ContainerProduct>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </ContainerProduct>
    </>
  );
};

export default ProductItems;
