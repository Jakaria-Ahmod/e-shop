import React from 'react';
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { updateQty } from '../../../service/redux/features/cartSlice';

const AllCartAded = ({
  brand,
  pName,
  price,
  qty,
  total,
  id,
  image,
  handleDelete,
}) => {
  const dispatch = useDispatch();
  // const count = useSelector(stat => stat.count.count);

  const handleContity = (id, newQty) => {
    if (newQty >= 1) {
      dispatch(updateQty({ id, qty: newQty }));
    }
  };

  return (
    <div>
      <div>
        <div className=" relative group items-center p-8 rounded-[15px] hover:border border border-white  hover:border-gray-400 grid grid-cols-[607px_171px_171px_171px] gap-x-[70px]">
          <div>
            <div className="flex items-center gap-x-[62px]">
              <div className="w-[237px] h-[214px] bg-[#D9D9D9] rounded-md">
                <img src={image} alt="" className="w-full h-full" />
              </div>
              <div className="w-[314px]">
                <h2 className="text-colorFour text-sm font-normal leading-[20px] font-montserrat mb-[16px]">
                  {brand}
                </h2>
                <p className="font-poppins text-colorFour text-[20px] font-semibold leading-[30px] hover:text-primary cursor-pointer">
                  {pName}
                </p>
                <div className="mt-[46px] flex gap-x-[8px] items-center">
                  <span className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
                    Variant:
                  </span>
                  <span className="text-colorFour font-montserrat text-base font-normal leading-[24px]">
                    Space Gray
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
              $ {price}
            </h2>
          </div>
          <div className="flex items-center gap-x-[16px]">
            <button className="cursor-pointer">
              <LuMinus size={20} onClick={() => handleContity(id, qty - 1)} />
            </button>
            <div className="w-[40px] h-[40px] bg-colorSeven rounded-full flex items-center justify-center">
              <span className="text-colorFour font-montserrat text-base font-bold leading-[24px] ">
                {qty}
              </span>
            </div>
            <button className="cursor-pointer">
              <FiPlus size={20} onClick={() => handleContity(id, qty + 1)} />
            </button>
          </div>
          <div>
            <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
              $ {(qty * price).toFixed(2)}
            </h2>
            <button className="absolute top-[28%] translate-y-[-50%] right-12 opacity-0 group-hover:opacity-100 w-[64px] h-[64px] rounded-full flex items-center justify-center bg-primary mt-[64px] cursor-pointer transition-all ease-in">
              <RiDeleteBin5Line
                size={30}
                color="#fff"
                onClick={() => handleDelete(id)}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCartAded;
