import React from 'react';
import { companeyData } from './companeyData';

import { Swiper, SwiperSlide } from 'swiper/react';

const Companeys = () => {
  return (
    <div className="mt-[103px] mb-[103px]">
      <Swiper
        spaceBetween={200}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {companeyData.map(item => (
          <SwiperSlide>
            <div key={item.id}>
              <img src={item?.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Companeys;
