import React from 'react';
import BlogCard from '../../globalComponents/BlogCard';
import BlogHeding from './components/BlogHeding';
import BlogLeft from './components/BlogLayout/BlogLeft';
import BlogRight from './components/BlogLayout/BlogRight';

const Blog = () => {
  return (
    <div className="container">
      <div>
        <BlogHeding></BlogHeding>
      </div>
      <div className="my-[80px] grid grid-cols-[440px_6fr] gap-x-[96px]">
        <BlogLeft></BlogLeft>
        <BlogRight></BlogRight>
      </div>
    </div>
  );
};

export default Blog;
