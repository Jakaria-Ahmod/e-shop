import React from 'react';
import { companeyData } from './companeyData';

import { Swiper, SwiperSlide } from 'swiper/react';

const Companeys = () => {
  return (
    <div className="mt-[103px] mb-[103px]">
      <Swiper
        spaceBetween={200}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
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
