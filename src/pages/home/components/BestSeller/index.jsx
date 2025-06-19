import React from 'react';
import Sellerleft from './BestSallerLayout/Sellerleft';
import SellerRight from './BestSallerLayout/SellerRight';

const BestSellerSection = () => {
  return (
    <div className="mt-20 mb-20 px-5">
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-8 lg:gap-[74px]">
        <div className="order-2 lg:order-0">
          <Sellerleft />
        </div>
        <div className="order-1 lg:order-0">
          <SellerRight />
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
