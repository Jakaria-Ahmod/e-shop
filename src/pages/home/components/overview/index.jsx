import React from 'react';
import overvieImgRight from '../../../../assets/img/overviewLeft.png';
import overvieImgLeft from '../../../../assets/img/overviewRight.png';
const Overview = () => {
  return (
    <div className="mt-[80px]">
      <div className="container">
        <div className="flex gap-x-5">
          <img
            src={overvieImgLeft}
            alt="img"
            className="cursor-pointer w-full h-full object-cover"
          />
          <img
            src={overvieImgRight}
            alt="img"
            className="cursor-pointer w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
