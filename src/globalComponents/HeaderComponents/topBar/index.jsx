import React from 'react';
import NumberAndPhone from './NumberAndPhone';
import SosalCourncy from './SosalCourncy';

const HeaderTopBar = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center py-[22px] p-5">
          <div>
            <NumberAndPhone />
          </div>
          <div>
            <SosalCourncy />
          </div>
        </div>
      </div>
      <div className="border-b border-colorFour opacity-25"></div>
    </>
  );
};

export default HeaderTopBar;
