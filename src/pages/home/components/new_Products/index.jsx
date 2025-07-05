import React, { useState } from 'react';
import { Link } from 'react-router';
import Allgatagorey from '../../../../globalComponents/HeaderComponents/menuBar/munuBarLayouts/allgatagori';
import ProdactCategore from './ProdactCategore';
import { IoIosArrowDown } from 'react-icons/io';
import { featuredProductApi } from '../Featured/featuredApi';
import ProductCard from '../../../../globalComponents/ProductsCard';
import { useTranslation } from 'react-i18next';

const NewProdact = () => {
  const [cardItems, setCardItems] = useState(5);

  const uptadeCardItemsValue = () => {
    setCardItems(prev => prev + 5);
  };
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="mt-[80px] mb-[80px] p-5">
          <div className="flex items-center flex-col justify-center md:flex-row md:justify-between">
            <div className="w-[50%]">
              <h3 className="text-colorFour font-poppins text-[20px] lg:text-[36px] font-semibold leading-[46px]">
                {t('New Products')}
              </h3>
            </div>
            <div className="flex items-center w-[50%] justify-center md:justify-end">
              <p className="hidden lg:block">Sort by</p>
              <ProdactCategore></ProdactCategore>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
            {featuredProductApi?.slice(0, cardItems).map(prodacut => (
              <ProductCard
                // ratings={prodacut?.ratings}
                prodacutImg={prodacut?.image}
                prodactName={prodacut?.brand}
                prodactPName={prodacut?.pName}
                ratings={prodacut?.ratings}
                ratingsCount={prodacut?.totalRatings}
                pPrice={prodacut?.price}
                pDiscount={prodacut?.discount}
              ></ProductCard>
            ))}
          </div>
          {cardItems < featuredProductApi.length && (
            <button
              onClick={uptadeCardItemsValue}
              className="py-[16px] px-[40px] font-montserrat font-bold leading-[30px] text-primary border rounded-md hover:bg-primary hover:text-white cursor-pointer transition ease-linear mx-auto block mt-[64px]"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewProdact;
