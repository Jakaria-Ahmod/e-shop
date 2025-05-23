import React, { useState } from 'react';
import { Link } from 'react-router';
import Allgatagorey from '../../../../globalComponents/HeaderComponents/menuBar/munuBarLayouts/allgatagori';
import ProdactCategore from './ProdactCategore';
import { IoIosArrowDown } from 'react-icons/io';
import { featuredProductApi } from '../Featured/featuredApi';
import ProductCard from '../../../../globalComponents/ProductsCard';

const NewProdact = () => {
  const [cardItems, setCardItems] = useState(5);

  const uptadeCardItemsValue = () => {
    setCardItems(prev => prev + 5);
  };

  return (
    <section>
      <div>
        <div className="mt-[80px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-colorFour font-poppins text-[36px] font-semibold leading-[46px]">
                New Products
              </h3>
            </div>
            <div className="flex items-center">
              <p>Sort by</p>
              <ProdactCategore></ProdactCategore>
            </div>
          </div>
          <div className="grid grid-cols-5">
            {featuredProductApi?.slice(0, cardItems).map(prodacut => (
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
