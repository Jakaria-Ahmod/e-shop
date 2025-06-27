import React from 'react';
import PriceRang from './components/Left/price';
import AllProduct from './components/Right/product';

const Product = () => {
  return (
    <div className="container ">
      <div className="my-[64px] grid grid-cols-[1fr_3.5fr] gap-x-[26px]">
        <div>
          <PriceRang></PriceRang>
        </div>
        <div>
          <AllProduct></AllProduct>
        </div>
      </div>
    </div>
  );
};

export default Product;
