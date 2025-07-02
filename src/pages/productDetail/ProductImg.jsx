import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
const ProductImg = ({ image }) => {
  return (
    <div>
      <div>
        <div className="w-[833px] h-[541px] rounded-[25px] cursor-pointer border border-gray-400">
          {/* <img src={image} alt="img" className="w-full h-full object-cover" /> */}
          <div className="relative w-full h-full overflow-visible rounded-2xl flex items-center justify-center">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: false,
                  src: image,
                  width: 450,
                  height: 450,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: {
                  zIndex: 999,
                  background: '#fff',
                },
                isHintEnabled: true,
                enlargedImagePosition: 'beside',
              }}
            />
          </div>
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
