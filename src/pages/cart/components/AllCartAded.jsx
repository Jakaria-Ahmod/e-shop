import React from 'react';
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { updateQty } from '../../../service/redux/features/cartSlice';

const AllCartAded = ({ brand, pName, price, qty, id, image, handleDelete }) => {
  const dispatch = useDispatch();

  const handleContity = (id, newQty) => {
    if (newQty >= 1) {
      dispatch(updateQty({ id, qty: newQty }));
    }
  };

  return (
    <div className="mb-6">
      <div className="relative  group items-center p-4 md:p-6 xl:p-8 rounded-[15px] hover:border border border-white hover:border-gray-400 grid grid-cols-1 md:grid-cols-[1fr_150px] xl:grid-cols-[607px_171px_171px_171px] gap-y-6">
        {/* Product Info */}
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-x-[62px] lg:gap-x-[20px]">
          <div className="w-full max-w-[237px] h-[214px] bg-[#D9D9D9] rounded-md">
            <img
              src={image}
              alt="product"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full xl:w-[314px] text-center xl:text-start">
            <h2 className="text-colorFour text-sm font-normal mb-2 leading-[20px] font-montserrat">
              {brand}
            </h2>
            <p className="font-poppins text-colorFour text-[18px] xl:text-[20px] mb-2 font-semibold leading-[30px] hover:text-primary cursor-pointer">
              {pName}
            </p>
            <div className="flex gap-x-[8px]  mt-[46px] items-center justify-center xl:justify-start">
              <span className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
                Variant:
              </span>
              <span className="text-colorFour font-montserrat text-base font-normal leading-[24px]">
                Space Gray
              </span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-center xl:justify-start">
          <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
            $ {price}
          </h2>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-center gap-x-[16px]">
          <button className="cursor-pointer">
            <LuMinus size={20} onClick={() => handleContity(id, qty - 1)} />
          </button>
          <div className="w-[40px] h-[40px] bg-colorSeven rounded-full flex items-center justify-center">
            <span className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
              {qty}
            </span>
          </div>
          <button className="cursor-pointer">
            <FiPlus size={20} onClick={() => handleContity(id, qty + 1)} />
          </button>
        </div>

        {/* Total + Delete */}
        <div className="flex flex-col items-center xl:items-end justify-between">
          <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base mb-2">
            $ {(qty * price).toFixed(2)}
          </h2>
          <button className="absolute top-2 right-2 xl:top-[35%] xl:right-12  group-hover:opacity-100 w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] rounded-full flex items-center justify-center bg-primary cursor-pointer transition-all ease-in">
            <RiDeleteBin5Line
              size={24}
              color="#fff"
              onClick={() => handleDelete(id)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCartAded;
