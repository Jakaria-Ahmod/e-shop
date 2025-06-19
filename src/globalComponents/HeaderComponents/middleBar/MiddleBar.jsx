import React from 'react';
import Logo from '../../../assets/svg/Logo';
import ShcarceWithCart from './ShcarceWithCart';
import { Link } from 'react-router';

const MiddleBar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center py-[22px] p-5">
          <div className="w-[50%]">
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
          <div className="w-[50%]">
            <ShcarceWithCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
