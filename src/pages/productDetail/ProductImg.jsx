import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductImg = ({ image }) => {
  return (
    <div>
      <div>
        <div className="lg:w-[833px] lg:h-[541px] rounded-[25px] cursor-pointer border border-gray-400 flex items-center justify-center">
          <Zoom>
            <img alt="Zoom" src={image} width="500" className="rounded-lg" />
          </Zoom>
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
