import React from 'react';
import { HiClock } from 'react-icons/hi';
import { Link, useLocation } from 'react-router';
import { FaUser } from 'react-icons/fa6';
import { RiTimeFill } from 'react-icons/ri';
import BlogImg from '../../assets/img/blog.avif';
const BlogCard = props => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return isHome ? <BlogCardHome {...props} /> : <BlogCardBlog {...props} />;
};

export default BlogCard;

//  Home Page Card Design
const BlogCardHome = ({ image, title, category, date }) => {
  return (
    <div className="border border-transparent group hover:border-[#B1A1A1] rounded-[25px] hover:border-opacity-20 transition-all duration-300">
      <div className=" group-hover:lg:p-[52px] group-hover:p-[20px]  transition-all duration-300">
        <div className=" rounded-[25px] overflow-hidden transition-all duration-300">
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="text-colorFour font-poppins font-semibold leading-[30px] text-[24px] mt-[32px] mb-[32px]">
            {title}
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <span className="px-[20px] py-[7px] bg-primary text-white font-montserrat text-base font-bold leading-[24px] rounded-[10px]">
            {category}
          </span>
          <div className="flex items-center gap-x-[10px]">
            <HiClock size={20} />
            <span className="text-colorFour font-montserrat text-[14px] font-normal leading-[20px]">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

//  Blog Page Card Design
const BlogCardBlog = ({ id, category, BlogTitle, img, user, Date }) => {
  return (
    <div>
      <div className="w-[432px] group h-[450px] transition-all ease-linear hover:p-[40px] hover:h-[530px] cursor-pointer border rounded-[25px] border-transparent hover:border-gray-300 overflow-hidden relative">
        <div className=" p-3 bg-primary rounded-[10px] flex items-center justify-center absolute top-[24px] left-[24px] group-hover:top-[70px]  transition-all group-hover:left-[70px]">
          <span className="text-white font-montserrat text-base  font-bold leading-[24px] ">
            {category}
          </span>
        </div>
        <div className="w-full h-[294px] bg-red-600 rounded-[25px] overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="mt-[24px]">
          <Link
            to={`/BlogDetail/${id}`}
            className="font-poppins hover:text-primary text-colorFour text-[24px] font-semibold leading-[30px]"
          >
            {BlogTitle}
          </Link>
        </div>
        <div className="mt-[18px] flex gap-x-[32px]">
          <div className="flex gap-x-[12px] items-center">
            <FaUser className="text-colorFour" />
            <span>{user}</span>
          </div>
          <div className="flex gap-x-[12px] items-center">
            <RiTimeFill className="text-colorFour" />
            <span>{Date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Conditional Component
