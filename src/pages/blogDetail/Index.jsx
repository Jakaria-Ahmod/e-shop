import React from 'react';
import { useLocation } from 'react-router';
import { BlogApi } from '../Blog/components/BlogApi';
import Heding from './components/Heding';
import BlogLeft from '../Blog/components/BlogLayout/BlogLeft';
import BlogTitlee from './components/BlogTitle';
import BlogImg from './components/BlogImg';
import BlogDescription from './components/BlogDescription';
import AllStep from './components/AllStep';
import DetailsPara from './components/DetailsPara';
import KeyWord from './components/KeyWord';
import Comments from './components/Comments';
import TechTalkSection from '../home/components/TechTalk';
import BlogCard from '../../globalComponents/BlogCard';
import Related from './components/Related';

const BlogDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(2, 3)[0];

  const BlogApiFind = BlogApi.find(item => item.id == id);

  if (!BlogApiFind)
    return <div className="text-center py-20 text-xl">Blog Not Found</div>;

  const {
    Date,
    LastParGap,
    category,
    comments,
    description,
    img,
    keyWord,
    BlogTitle,
    user,
    step,
  } = BlogApiFind;

  return (
    <div className="container px-4 md:px-6 lg:px-8 mx-auto">
      <div className="my-16">
        {/* Blog Title Heading */}
        <Heding BlogTitle={BlogTitle} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[440px_1fr] gap-y-10 lg:gap-x-16 mt-16">
          {/* Sidebar */}
          <div>
            <BlogLeft />
          </div>

          {/* Blog Content */}
          <div>
            {/* Blog Title Section */}
            <BlogTitlee
              BlogTitle={BlogTitle}
              user={user}
              Date={Date}
              comments={comments}
            />

            {/* Blog Image */}
            <div className="my-12">
              <BlogImg img={img} />
            </div>

            {/* Blog Description */}
            <div className="mb-10">
              <BlogDescription description={description} />
            </div>

            {/* Blog Steps */}
            <div className="space-y-10 mb-10">
              {step.map(item => (
                <div key={item.id}>
                  <AllStep
                    stepNumber={item?.stepNumber}
                    stepTitle={item?.stepTitle}
                    stepDetails={item?.stepDetails}
                  />
                </div>
              ))}
            </div>

            {/* Last Paragraph */}
            <div className="mb-10">
              <DetailsPara LastParGap={LastParGap} />
            </div>

            {/* Keywords */}
            <div className="mb-10">
              <KeyWord keyWord={keyWord} />
            </div>

            {/* Comments */}
            <div className="mb-16">
              <Comments />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <Related />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
