import { Link } from 'react-router';
import ProductCard from '../../../../globalComponents/ProductsCard';
import { featuredProductApi } from './featuredApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PrevButton from '../../../../globalComponents/PrevButton';
import NextButton from '../../../../globalComponents/NextButton';
import CommonHeding from '../../../../globalComponents/comonHeading';

const Featured = () => {
  return (
    <div className="mt-[80px]">
      <CommonHeding></CommonHeding>
      <div>
        <div className="relative">
          <div className="absolute top-[270px] -left-5 z-40 swiper-button-prev">
            <PrevButton></PrevButton>
          </div>
          <div className="absolute top-[270px] -right-5 z-40 swiper-button-next ">
            <NextButton></NextButton>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {featuredProductApi?.map(prodacut => (
            <SwiperSlide>
              <ProductCard
                key={prodacut?.id}
                prodacutImg={prodacut?.img}
                prodactName={prodacut?.name}
                prodactPName={prodacut?.pName}
                ratings={prodacut?.ratings}
                ratingsCount={prodacut?.ratingsCount}
                pPrice={prodacut?.pPrice}
                pDiscount={prodacut?.pDiscount}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
