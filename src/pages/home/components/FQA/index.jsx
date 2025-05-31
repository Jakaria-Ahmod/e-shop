import React from 'react';
import FqaLeft from './FqaLayout/FqaLeft';
import FqaRight from './FqaLayout/FqaRight';

const FaqSection = () => {
  return (
    <div className="bg-colorSeven">
      <div className="container">
        <div>
          <div className="pt-[64px] pb-[64px]">
            <div className="grid grid-cols-[2fr_1fr] gap-x-[112px]">
              <FqaLeft></FqaLeft>
              <FqaRight></FqaRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
