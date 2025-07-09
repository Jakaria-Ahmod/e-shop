import React, { useState } from 'react';
import BlogCard from '../../../../../globalComponents/BlogCard';
import { BlogApi } from '../../BlogApi';

const BlogRight = () => {
  const itemsPerPage = 10; // প্রতি পেজে কয়টা ব্লগ দেখাবে
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BlogApi.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = BlogApi.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-[60px]">
        {currentBlogs.map(item => (
          <div key={item.id}>
            <BlogCard
              id={item.id}
              category={item.category}
              BlogTitle={item.BlogTitle}
              img={item.img}
              user={item.user}
              Date={item.Date}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          Prev
        </button>
        <span className="text-lg font-medium text-colorFour">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogRight;
