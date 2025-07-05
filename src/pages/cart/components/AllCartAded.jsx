import React from 'react';
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeCrement,
  InCrement,
} from '../../../service/redux/features/countSlice';

const AllCartAded = () => {
  const dispatch = useDispatch();
  const count = useSelector(stat => stat.count.count);

  return (
    <div>
      <div>
        <div className=" items-center p-8 rounded-[15px] hover:border border border-white  hover:border-gray-400 grid grid-cols-[607px_171px_171px_171px] gap-x-[70px]">
          <div>
            <div className="flex items-center gap-x-[62px]">
              <div className="w-[237px] h-[214px] bg-[#D9D9D9] rounded-md"></div>
              <div className="w-[314px]">
                <h2 className="text-colorFour text-sm font-normal leading-[20px] font-montserrat mb-[16px]">
                  Leptop
                </h2>
                <p className="font-poppins text-colorFour text-[20px] font-semibold leading-[30px] hover:text-primary cursor-pointer">
                  2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
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
              $1,659.00
            </h2>
          </div>
          <div className="flex items-center gap-x-[16px]">
            <button className="cursor-pointer">
              <LuMinus size={20} onClick={() => dispatch(DeCrement())} />
            </button>
            <div className="w-[40px] h-[40px] bg-colorSeven rounded-full flex items-center justify-center">
              <span className="text-colorFour font-montserrat text-base font-bold leading-[24px] ">
                {count}
              </span>
            </div>
            <button className="cursor-pointer">
              <FiPlus size={20} onClick={() => dispatch(InCrement())} />
            </button>
          </div>
          <div>
            <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
              $1,659.00
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCartAded;
