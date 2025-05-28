import React from 'react';
import { Navigation } from 'swiper/modules';
import SpiringData from '../../Spring/SpringRight/SpirgnApi.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrevButton from '../../../../../globalComponents/PrevButton';
import NextButton from '../../../../../globalComponents/NextButton';
import SpringProductCard from '../SpringRight/SpiringProdactCard.jsx';
const SpringRight = () => {
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-[370px] -left-5 z-40 swiper-button-prev-spring">
        <PrevButton />
      </div>
      <div className="absolute top-[370px] -right-5 z-40 swiper-button-next-spring">
        <NextButton />
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => {}}
        onSwiper={() => {}}
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev-spring',
          nextEl: '.swiper-button-next-spring',
        }}
      >
        {SpiringData?.map(product => (
          <SwiperSlide key={product?.id}>
            <SpringProductCard
              prodacutImg={product?.img}
              prodactName={product?.name}
              prodactPName={product?.pName}
              ratings={product?.ratings}
              ratingsCount={product?.ratingsCount}
              pPrice={product?.pPrice}
              pDiscount={product?.pDiscount}
              totalStock={product?.totalStock}
              soldQuantity={product?.soldQuantity}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpringRight;
