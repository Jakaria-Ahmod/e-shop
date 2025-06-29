import React from 'react';
import { featuredProductApi } from '../home/components/Featured/featuredApi';
import { useLocation } from 'react-router';
import ProductImg from './ProductImg';
import ProductDetailsCom from './ProductDetailsCom';
import BuyNowAndCout from './BuyNowAndCout';
import BuyAndCount from './BuyAndCount';

const ProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(1)[1];
  const data = featuredProductApi.find(item => item.id == id);
  console.log(data);

  const {
    pCategory,
    image,
    ratings,
    totalRatings,
    pName,
    price,
    discount,
    brand,
    size,
    weight,
    delivery,
    variant,
  } = data;
  console.log(weight, delivery);

  return (
    <div className="container">
      <div className="mb-[50px]">
        <div className="flex items-center gap-x-[16px] mt-[64px] mb-[48px]">
          <div className="flex items-center gap-x-[15px]">
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              Home
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              {pCategory}
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              {brand}
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
          </div>
          <span className="font-montserrat text-colorFour text-base font-bold leading-[24px]">
            NexSUS ROCK Strix Scar 17 Gaming Laptop
          </span>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr]">
          <ProductImg image={image}></ProductImg>
          <div>
            <ProductDetailsCom
              ratings={ratings}
              totalRatings={totalRatings}
              pName={pName}
              price={price}
              discount={discount}
              brand={brand}
              size={size}
              weight={weight}
              delivery={delivery}
              variant={variant}
            ></ProductDetailsCom>
          </div>
        </div>
        <div className="flex gap-x-[110px] items-center mt-[73px] justify-between">
          <div className="w-[780px]">
            <BuyNowAndCout></BuyNowAndCout>
          </div>
          <BuyAndCount></BuyAndCount>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
