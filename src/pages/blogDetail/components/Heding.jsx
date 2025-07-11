import React from 'react';
import { Link } from 'react-router';

const Heding = ({ BlogTitle }) => {
  return (
    <div>
      <div className="flex  gap-x-[16px]">
        <Link
          to="/"
          className="font-montserrat text-colorFour text-base font-normal leading-[24px]"
        >
          Home
        </Link>
        <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
          |
        </span>
        <Link
          to="/Blog"
          className="font-montserrat text-colorFour text-base font-normal leading-[24px]"
        >
          Blog
        </Link>
        <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
          |
        </span>
        <span className="font-montserrat text-colorFour text-sm lg:text-base font-bold leading-[24px]">
          {BlogTitle}
        </span>
      </div>
    </div>
  );
};

export default Heding;
