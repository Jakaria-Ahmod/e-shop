import React from 'react';

const BlogDescription = ({ description }) => {
  return (
    <div>
      <div>
        <p className="text-colorFour font-montserratf text-[20px] font-normal leading-[30px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogDescription;
