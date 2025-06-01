import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import { TechTalksData } from './TechTalkApi';

const TechTalkSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pt-[80px] pb-[80px]">
        <section>
          <div className="flex  justify-between">
            <div>
              <h3 className="text-colorFour font-poppins text-[36px] font-semibold leading-[46px] mb-[24px]">
                {t('Tech Talk')}
              </h3>
              <p className="text-colorFour font-montserrat font-normal leading-[30px] text-xl">
                Stay up to date with the latest trends, reviews, and insights
                from our experts.
              </p>
            </div>
            <div className="self-end">
              <Link className="flex items-center gap-x-[16px]" to="/blog">
                <p className="font-montserrat text-base font-bold leading-[24px] text-primary hover:pr-2">
                  View All
                </p>
                <p>
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
      </div>
      <div className="grid grid-cols-3 justify-center gap-x-[48px]">
        {TechTalksData?.map(item => (
          <BlogCard
            image={item?.image}
            title={item?.title}
            category={item?.category}
            postedBy={item?.postedBy}
            date={item?.date}
          ></BlogCard>
        ))}
      </div>
    </>
  );
};

export default TechTalkSection;
