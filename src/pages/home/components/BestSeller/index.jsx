import React from 'react';
import Sellerleft from './BestSallerLayout/Sellerleft';
import SellerRight from './BestSallerLayout/SellerRight';

const BestSellerSection = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="grid grid-cols-[3fr_1fr] gap-x-[74px]">
        <Sellerleft></Sellerleft>
        <SellerRight></SellerRight>
      </div>
    </div>
  );
};

export default BestSellerSection;
