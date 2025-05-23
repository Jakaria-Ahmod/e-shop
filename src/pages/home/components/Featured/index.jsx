import { Link } from 'react-router';
import ProductCard from '../../../../globalComponents/ProductsCard';
import { featuredProductApi } from './featuredApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import { Navigation } from 'swiper/modules';

const Featured = () => {
  return (
    <div className="mt-[80px]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-colorFour font-poppins text-[36px] font-semibold leading-[46px]">
            Featured Products
          </h3>
        </div>
        <div>
          <Link className="flex items-center gap-x-[16px]" to="/product">
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
