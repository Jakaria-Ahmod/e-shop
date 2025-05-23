import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const NextButton = () => {
  return (
    <div>
      <div>
        <div className="w-[40px] h-[40px] rounded-full border flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary hover:border-primary">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default NextButton;
