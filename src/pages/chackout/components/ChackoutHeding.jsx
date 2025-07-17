import React from 'react';
import { Link, useLocation } from 'react-router';

const ChackoutHeding = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split('/').slice(1, 2)[0];

  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-wrap items-center gap-x-[16px] gap-y-2">
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
        <span className="text-colorFour font-montserrat text-base font-bold leading-[24px] capitalize">
          {pageName}
        </span>
      </div>
    </div>
  );
};

export default ChackoutHeding;
