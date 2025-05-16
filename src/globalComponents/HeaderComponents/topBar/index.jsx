import React from 'react';
import NumberAndPhone from './NumberAndPhone';

const HeaderTopBar = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center py-[22px]">
          <div>
            <NumberAndPhone />
          </div>
          <div>right</div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopBar;
