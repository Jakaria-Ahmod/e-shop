import React from 'react';
import { Link } from 'react-router';

const BlogHeding = () => {
  return (
    <div>
      <div>
        <div className="xl:w-[1520px] flex justify-center flex-col lg:h-[600px] bg-colorSeven mt-[32px] rounded-[15px] p-[110px]">
          <h2 className="text-colorFour font-poppins text-2xl lg:text-[56px] font-bold leading-[68px]">
            Tech Talk Blog
          </h2>
          <div className="flex items-center gap-x-[16px] lg:mt-[24px]">
            <Link
              to="/"
              className="font-montserrat text-colorFour text-base font-normal leading-[24px]"
            >
              Home
            </Link>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
            <span className="font-montserrat text-colorFour text-base font-bold leading-[24px]">
              Blog
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeding;
