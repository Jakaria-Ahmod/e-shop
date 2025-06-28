import React from 'react';
import Categores from './Categores';
import Brands from './Brands';
import Price from './Price';

const PriceRang = () => {
  return (
    <div>
      <div className="bg-colorSeven w-[98%]  rounded-md p-[48px]">
        <Categores></Categores>
        <div>
          <hr className="text-gray-300 " />
        </div>
        <Brands></Brands>
        <div>
          <hr className="text-gray-300 " />
        </div>
        <Price></Price>
      </div>
    </div>
  );
};

export default PriceRang;
