import React from 'react';
import { Search } from 'lucide-react';
// import Image from 'next/image'; // Image import back again

const BlogLeft = () => {
  const categories = [
    'Tech News',
    'Product Reviews',
    'How-To Guides',
    'Lifestyle',
    'Emerging Technologies',
  ];
  const tags = [
    'Tech',
    'Trends',
    'Innovation',
    'Tips',
    'Gadget',
    'Guide',
    'Gadget Review',
  ];
  const recentPosts = [
    {
      title: 'The Benefits of Using Wireless Earbuds',
      date: 'April 14, 2023',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Why You Should Upgrade to a Smart TV',
      date: 'April 16, 2023',
      image: '/placeholder.svg?height=200&width=400',
    },
  ];

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Blog Search Section */}
      <div className="bg-[#ff624c] rounded-2xl p-[40px]">
        <h2 className="text-white text-xl font-semibold mb-4">Blog Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Article ..."
            className="w-full bg-white border-0 rounded-lg pl-4 pr-12 py-3 text-gray-600 placeholder:text-gray-400 outline-none"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-[#303030] rounded-2xl p-6">
        <h2 className="text-white text-xl font-semibold mb-6">Categories</h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="text-white text-sm py-2">{category}</div>
              {index < categories.length - 1 && (
                <div className="border-b border-gray-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="bg-[#f4f4f4] rounded-2xl p-6">
        <h2 className="text-[#303030] text-xl font-semibold mb-6">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-white text-[#303030] border border-[#d9d9d9] hover:bg-gray-50 rounded-lg px-4 py-2 text-sm cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-[#303030] font-poppins text-[24px] font-semibold leading-[60px]">
            Recent Posts
          </h2>
          <div className="w-[156px] h-[4px] mt-[8px] bg-[#ff624c]"></div>
        </div>

        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div key={index} className="space-y-3">
              <div className="bg-[#d9d9d9] rounded-[25px] overflow-hidden w-[439px] h-[237px]"></div>
              <div>
                <h3 className="text-[#303030] text-[20px] font-semibold leading-[30px] mb-2">
                  {post.title}
                </h3>
                <p className="font-montserrat text-base font-normal leading-[24px]">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLeft;
