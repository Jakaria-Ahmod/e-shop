import React from 'react';
import FqaLeft from './FqaLayout/FqaLeft';
import FqaRight from './FqaLayout/FqaRight';

const FaqSection = () => {
  return (
    <div className="bg-colorSeven xl:p-5">
      <div className="container">
        <div>
          <div className="pt-[64px] pb-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:gap-x-[112px] lg:gap-x-[20px]">
              <div className="order-2 lg:order-0">
                <FqaLeft></FqaLeft>
              </div>
              <div className="order-1 lg:order-0">
                <FqaRight></FqaRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
