import React from 'react';
import SpirngLeft from './SpirgnLeft';
import SpirngRight from './SpringRight';

const SpringMain = () => {
  return (
    <div className="bg-colorSeven">
      <div className="flex py-[64px] container items-center">
        <div className="w-[35%]">
          <SpirngLeft></SpirngLeft>
        </div>
        <div className="w-[65%]">
          <SpirngRight></SpirngRight>
        </div>
      </div>
    </div>
  );
};

export default SpringMain;
