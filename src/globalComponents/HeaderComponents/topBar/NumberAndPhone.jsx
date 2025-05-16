import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
const NumberAndPhone = () => {
  return (
    <div>
      <div className="flex items-center space-x-[50px]">
        <div className="flex items-center space-x-[8px]">
          <CiLocationOn />
          <p className="font-montserrat text-[14px] font-normal leading-[20px] text-colorFour">
            123 Main Street, Anytown USA
          </p>
        </div>
        <div className="border border-l-colorFour opacity-25 h-[32px] "></div>
        <div className="flex items-center space-x-[8px]">
          <BsTelephone size={15} />
          <p className="font-montserrat text-[14px] font-normal leading-[20px] text-colorFour">
            +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberAndPhone;
