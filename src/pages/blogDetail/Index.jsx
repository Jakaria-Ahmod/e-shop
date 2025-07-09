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

  console.log(BlogApiFind);

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
    <div className="container">
      <div className="my-[64px]">
        <Heding BlogTitle={BlogTitle}></Heding>
        <div className="grid grid-cols-[440px_10fr] gap-x-[61px] mt-[64px]">
          <BlogLeft></BlogLeft>
          <div>
            <BlogTitlee
              BlogTitle={BlogTitle}
              user={user}
              Date={Date}
              comments={comments}
            ></BlogTitlee>
            <div className="my-[48px]">
              {' '}
              <BlogImg img={img}></BlogImg>
            </div>
            <div>
              <BlogDescription description={description}></BlogDescription>
            </div>
            <div>
              {step.map(item => (
                <div key={item.id}>
                  <AllStep
                    stepNumber={item?.stepNumber}
                    stepTitle={item?.stepTitle}
                    stepDetails={item?.stepDetails}
                  ></AllStep>
                </div>
              ))}
            </div>
            <div>
              <DetailsPara LastParGap={LastParGap}></DetailsPara>
            </div>
            <div>
              <KeyWord keyWord={keyWord}></KeyWord>
            </div>
            <div>
              <Comments></Comments>
            </div>
          </div>
        </div>
        <Related></Related>
      </div>
    </div>
  );
};

export default BlogDetail;
