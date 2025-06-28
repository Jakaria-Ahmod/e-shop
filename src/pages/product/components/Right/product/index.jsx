import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductFilter from '../../ProductFilter';
import PriceLowHeight from '../../PriceLowHeight';
import GridAndList from '../../GridAndList';
import { featuredProductApi } from '../../../../home/components/Featured/featuredApi';
import ProductCard from '../../../../../globalComponents/ProductsCard';
import ProductListCard from '../../../../../globalComponents/LIstProductCard';

const AllProduct = () => {
  const viewType = useSelector(state => state.view.viewType);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalItems = featuredProductApi.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = featuredProductApi.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1440px] mx-auto">
      <h3 className="font-poppins text-[28px] sm:text-[32px] xl:text-[36px] font-semibold leading-[46px] text-colorFour">
        Products
      </h3>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-y-4 lg:items-center">
        {/* Result Count */}
        <p className="font-montserrat text-colorFour text-sm sm:text-base">
          Showing {startIndex + 1} -{' '}
          {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}{' '}
          results.
        </p>

        {/* Filters & Sorting */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
          {/* Sort */}
          <div className="flex items-center gap-x-2 min-w-[180px]">
            <p className="text-sm sm:text-base">Sort by</p>
            <ProductFilter />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-[32px] bg-colorFour opacity-25" />

          {/* Price Sort */}
          <PriceLowHeight />

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-[32px] bg-colorFour opacity-25" />

          {/* View Switch */}
          <GridAndList />
        </div>
      </div>

      {/* Product Grid/List */}
      <div
        className={`mt-8 ${
          viewType === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'flex flex-col gap-6'
        }`}
      >
        {selectedProducts.map((item, index) =>
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

      {/* Pagination */}
      <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map(pageNum => (
          <button
            key={pageNum}
            className={`px-3 py-1 rounded border transition-all duration-200 ${
              currentPage === pageNum + 1
                ? 'bg-primary text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => setCurrentPage(pageNum + 1)}
          >
            {pageNum + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
