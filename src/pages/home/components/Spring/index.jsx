import React from 'react';
import SpirngLeft from './SpirgnLeft';
import SpirngRight from './SpringRight';

const SpringMain = () => {
  return (
    <div className="bg-colorSeven">
      <div className="flex flex-col lg:flex-row py-[64px] container items-center">
        <div className=" lg:w-[35%] ">
          <SpirngLeft></SpirngLeft>
        </div>
        <div className="w-[95%] lg:w-[65%] order-1">
          <SpirngRight></SpirngRight>
        </div>
      </div>
    </div>
  );
};

export default SpringMain;
