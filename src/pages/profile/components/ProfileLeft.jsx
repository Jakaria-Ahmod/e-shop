import React from 'react';
import { FaBorderStyle } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoIosLogOut } from 'react-icons/io';

const ProfileLeft = ({ setSelectedMenu }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[380px] shadow rounded-md p-6 md:p-[40px]">
        <div className="w-[180px] h-[180px] md:w-[252px] md:h-[252px] bg-[#D9D9D9] rounded-full mx-auto mt-16 md:mt-[64px] border-white"></div>

        <div className="mt-10 md:mt-[40px]">
          <h2 className="text-colorFour font-poppins text-center text-lg md:text-[24px] font-semibold leading-[30px]">
            Amelia Robert
          </h2>
          <p className="text-colorFour font-montserrat text-center mt-2 md:mt-[8px] text-xs md:text-sm font-normal leading-[20px] opacity">
            amelia.watson@eshop.com
          </p>
        </div>

        <div className="w-[200px] md:w-[300px] mx-auto h-[1px] md:h-[2px] bg-gray-300 my-10 md:my-[40px]"></div>

        {/* Menu Items */}
        <div>
          <div
            className="flex items-center gap-x-4 md:gap-x-[16px] group cursor-pointer my-5 md:my-[20px]"
            onClick={() => setSelectedMenu('orders')}
          >
            <FaBorderStyle size={24} className="group-hover:text-primary" />
            <h5 className="text-colorFour font-montserrat text-sm md:text-base font-bold leading-6 md:leading-[24px] group-hover:text-primary">
              Orders
            </h5>
          </div>

          <div
            className="flex items-center gap-x-4 md:gap-x-[16px] group cursor-pointer"
            onClick={() => setSelectedMenu('account')}
          >
            <FaRegCircleUser size={24} className="group-hover:text-primary" />
            <h5 className="text-colorFour font-montserrat text-sm md:text-base font-bold leading-6 md:leading-[24px] group-hover:text-primary">
              Account Details
            </h5>
          </div>

          <div
            className="flex items-center gap-x-4 md:gap-x-[16px] group cursor-pointer my-5 md:my-[20px]"
            onClick={() => setSelectedMenu('logout')}
          >
            <IoIosLogOut size={24} className="group-hover:text-primary" />
            <h5 className="text-colorFour font-montserrat text-sm md:text-base font-bold leading-6 md:leading-[24px] group-hover:text-primary">
              Log Out
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
