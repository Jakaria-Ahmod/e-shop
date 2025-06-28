import React from 'react';
import PriceRang from './components/Left/price';
import AllProduct from './components/Right/product';
import UptadesIndex from '../home/components/uptades';

const Product = () => {
  return (
    <div className="container ">
      <div className="my-[64px]  grid lg:grid-cols-[1fr_3.5fr] gap-x-[26px] p-x-[10px]">
        <div className="hidden xl:block">
          <PriceRang></PriceRang>
        </div>
        <div>
          <AllProduct></AllProduct>
        </div>
      </div>
      <div>
        <UptadesIndex></UptadesIndex>
      </div>
    </div>
  );
};

export default Product;
