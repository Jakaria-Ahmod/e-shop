import React from 'react';

const ProductImg = ({ image }) => {
  return (
    <div>
      <div>
        <div className="w-[833px] h-[541px] bg-black rounded-[25px] cursor-pointer overflow-hidden border border-gray-400">
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>
        <div className="flex mt-[32px] gap-x-[32px]">
          <div className="w-[94px] h-[82px] bg-black rounded-md overflow-hidden border border-gray-400">
            <img src={image} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="w-[94px] h-[82px] bg-black rounded-md overflow-hidden border border-gray-400">
            <img src={image} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="w-[94px] h-[82px] bg-black rounded-md overflow-hidden border border-gray-400">
            <img src={image} alt="img" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
