import React from 'react';
import { Link, useLocation } from 'react-router';

const ChackoutHeding = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split('/').slice(1, 2)[0];

  return (
    <div>
      <div className="flex items-center gap-x-[16px]">
        <Link
          to="/"
          className="font-montserrat text-base font-normal leading-[24px] text-colorFour"
        >
          Home
        </Link>
        <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
          |
        </span>
        <Link
          to="/cart"
          className="font-montserrat text-base font-normal leading-[24px] text-colorFour"
        >
          Cart
        </Link>
        <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
          |
        </span>
        <span className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
          {pageName}
        </span>
      </div>
    </div>
  );
};

export default ChackoutHeding;
