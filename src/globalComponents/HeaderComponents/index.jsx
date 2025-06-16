import React from 'react';
import HeaderTopBar from './topBar';
import MiddleBar from './middleBar/MiddleBar';
import MenuBar from './menuBar';
import MoblieResponsive from '../mobileResponsive';

const HeaderLayoutComponents = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <HeaderTopBar />
        <MiddleBar />
        <MenuBar />
      </div>
      <div className="lg:hidden">
        <MoblieResponsive></MoblieResponsive>
      </div>
    </div>
  );
};

export default HeaderLayoutComponents;
