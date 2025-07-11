import React from 'react';

const BlogImg = ({ img }) => {
  return (
    <div>
      <div className="xl:w-[1020px] lg:h-[645px] bg-black rounded-[25px] overflow-hidden">
        <img src={img} alt="img" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BlogImg;
