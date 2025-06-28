import React from 'react';
import { useSelector } from 'react-redux';
import ProductFilter from '../../ProductFilter';
import PriceLowHeight from '../../PriceLowHeight';
import GridAndList from '../../GridAndList';
import { featuredProductApi } from '../../../../home/components/Featured/featuredApi';
import ProductCard from '../../../../../globalComponents/ProductsCard';
import ProductListCard from '../../../../../globalComponents/LIstProductCard';

const AllProduct = () => {
  const viewType = useSelector(state => state.view.viewType); // Redux state

  return (
    <div>
      <h3 className="font-poppins text-[36px] font-semibold leading-[46px] text-colorFour">
        Products
      </h3>

      <div className="flex gap-x-[295px] mt-[24px]">
        <div>
          <p className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
            Showing 1 - 16 of 160 results.
          </p>
        </div>

        <div className="flex gap-x-[24px] justify-end">
          <div className="flex gap-x-[16px]">
            <p>Sort by</p>
            <ProductFilter />
          </div>
          <div className="w-[1px] h-[32px] bg-colorFour opacity-25"></div>
          <PriceLowHeight />
          <div className="w-[1px] h-[32px] bg-colorFour opacity-25"></div>
          <GridAndList />
        </div>
      </div>

      {/* Product Rendering */}
      <div
        className={`${
          viewType === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'
            : 'flex flex-col gap-6 mt-8'
        }`}
      >
        {featuredProductApi.map((item, index) =>
          viewType === 'grid' ? (
            <ProductCard
              key={index}
              prodacutImg={item?.img}
              prodactName={item?.name}
              prodactPName={item?.pName}
              ratings={item?.ratings}
              ratingsCount={item?.ratingsCount}
              pPrice={item?.pPrice}
              pDiscount={item?.pDiscount}
            />
          ) : (
            <ProductListCard
              key={index}
              prodacutImg={item?.img}
              prodactName={item?.name}
              prodactPName={item?.pName}
              ratings={item?.ratings}
              ratingsCount={item?.ratingsCount}
              pPrice={item?.pPrice}
              pDiscount={item?.pDiscount}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AllProduct;
