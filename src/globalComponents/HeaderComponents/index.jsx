import React from 'react';
import HeaderTopBar from './topBar';
import MiddleBar from './middleBar/MiddleBar';
import MenuBar from './menuBar';

const HeaderLayoutComponents = () => {
  return (
    <div>
      <HeaderTopBar />
      <MiddleBar />
      <MenuBar />
    </div>
  );
};

export default HeaderLayoutComponents;
