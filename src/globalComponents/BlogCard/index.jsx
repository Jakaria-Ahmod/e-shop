import React from 'react';
import { HiClock } from 'react-icons/hi';
import { useLocation } from 'react-router';
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
const BlogCardBlog = ({ image, title, category, date }) => {
  return (
    // <div className="border border-gray-300 shadow-md rounded-[15px] p-4 transition-all duration-300">
    //   <div className="rounded-[15px] overflow-hidden h-[250px] mb-4">
    //     <img src={image} alt="img" className="w-full h-full object-cover" />
    //   </div>
    //   <h6 className="text-gray-800 font-semibold text-[20px] mb-4">{title}</h6>
    //   <div className="flex items-center justify-between">
    //     <span className="px-4 py-1 bg-primary text-white text-sm font-bold rounded-md">
    //       {category}
    //     </span>
    //     <div className="flex items-center gap-2">
    //       <HiClock size={18} />
    //       <span className="text-gray-600 text-sm">{date}</span>
    //     </div>
    //   </div>
    // </div>
    <h3> i am blog card desing</h3>
  );
};

// ✅ Main Conditional Component
