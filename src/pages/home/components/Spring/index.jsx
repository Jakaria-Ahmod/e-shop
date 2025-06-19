import React from 'react';
import SpirngLeft from './SpirgnLeft';
import SpirngRight from './SpringRight';

const SpringMain = () => {
  return (
    <div className="bg-colorSeven p-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row md:justify-between py-[64px] container items-center">
          <div className="lg:w-[35%] ">
            <SpirngLeft></SpirngLeft>
          </div>
          <div className="w-[95%] sm:w-[50%] md:w-[80%] lg:w-[55%] xl:w-[70%]  order-1">
            <SpirngRight></SpirngRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringMain;
