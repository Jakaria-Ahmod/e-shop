import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { FaComment } from 'react-icons/fa6';
import { RiTimeFill } from 'react-icons/ri';
const BlogTitlee = ({ BlogTitle, user, Date, comments }) => {
  return (
    <div>
      <div>
        <h2 className="font-poppins lg:text-[56px] text-lg font-bold lg:leading-[68px] text-colorFour">
          {BlogTitle}
        </h2>
        <div>
          <div className="flex gap-x-[48px] mt-[24px]">
            <div className="flex gap-x-[12px] items-center">
              <FaUser size={19} className="text-colorFour opacity-75" />
              <span className="font-montserrat opacity-75  lg:text-base font-normal text-colorFour leading-[24px]">
                {user}
              </span>
            </div>
            <div className="flex gap-x-[12px] items-center">
              <RiTimeFill size={19} className="text-colorFour opacity-75" />
              <span className="font-montserrat opacity-75 text-base font-normal text-colorFour leading-[24px]">
                {Date}
              </span>
            </div>
            <div className="flex gap-x-[12px] items-center">
              <FaComment size={19} className="text-colorFour opacity-75" />
              <span className="font-montserrat opacity-75 text-base font-normal text-colorFour leading-[24px]">
                {comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitlee;
