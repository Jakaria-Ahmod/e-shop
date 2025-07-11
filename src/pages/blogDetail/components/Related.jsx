import React from 'react';
import { Link, useLocation } from 'react-router';
import BlogCard from '../../../globalComponents/BlogCard';
import { BlogApi } from '../../Blog/components/BlogApi';

const Related = () => {
  const { pathname } = useLocation();
  const blogId = parseInt(pathname.split('/')[2]); // 🟢 Ensure it's a number

  const currentBlog = BlogApi.find(item => item.id === blogId);

  if (!currentBlog) {
    return <p className="text-red-500 mt-4">Blog not found</p>;
  }

  const RelatedBlog = BlogApi.filter(
    item => item.category === currentBlog.category && item.id !== currentBlog.id
  );

  return (
    <div>
      <section>
        <div className="flex justify-between items-center">
          <div className="w-[80%]">
            <h3 className="text-colorFour font-poppins text-xl lg:text-[36px] font-semibold leading-[46px]">
              Related Articles
            </h3>
          </div>
          <div className="self-end w-[20%]">
            <Link className="flex items-center lg:gap-x-[16px]" to="/blog">
              <p className="font-montserrat text-[12px] lg:text-base font-bold leading-[24px] text-primary hover:pr-2">
                View All
              </p>
              <p className="hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="8"
                  viewBox="0 0 29 8"
                  fill="none"
                >
                  <path
                    d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4V4.5H28V4V3.5H0V4Z"
                    fill="#FF624C"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Blogs List */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
        {RelatedBlog.slice(0, 3).map(item => (
          <BlogCard
            key={item.id}
            id={item.id}
            category={item.category}
            BlogTitle={item.BlogTitle}
            img={item.img}
            user={item.user}
            Date={item.Date}
          />
        ))}
      </div>
    </div>
  );
};

export default Related;
