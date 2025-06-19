import React from 'react';
import Sellerleft from './BestSallerLayout/Sellerleft';
import SellerRight from './BestSallerLayout/SellerRight';

const BestSellerSection = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="grid lg:grid-cols-[3fr_1fr] gap-x-[74px]">
        <div className="order-2 lg:order-0">
          <Sellerleft></Sellerleft>
        </div>
        <div className="order-1 lg:order-0">
          <SellerRight></SellerRight>
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
