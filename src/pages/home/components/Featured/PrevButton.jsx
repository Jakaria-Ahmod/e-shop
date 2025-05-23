import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const PrevButton = () => {
  return (
    <div>
      <div className="w-[40px] h-[40px] rounded-full border flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary hover:border-primary bg-white">
        <MdOutlineArrowBackIos />
      </div>
    </div>
  );
};

export default PrevButton;
