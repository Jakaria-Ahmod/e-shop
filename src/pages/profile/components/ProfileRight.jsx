import React from 'react';
import AccountDetails from './AccountDetails';
import Orders from './Orders';

const ProfileRight = ({ selectedMenu }) => {
  return (
    <div className="w-full">
      {/* Top grid: responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 md:p-[48px] bg-colorSeven rounded-2xl">
          <h2 className="text-colorFour font-poppins text-2xl md:text-[36px] font-semibold leading-snug md:leading-[46px] w-full md:w-[50%]">
            Order Tracking
          </h2>
          <p className="text-colorFour font-montserrat text-base md:text-[20px] font-normal leading-[24px] md:leading-[30px] mt-5 md:mt-[20px]">
            See your order history.
          </p>
        </div>

        <div className="p-6 md:p-[48px] bg-colorSeven rounded-2xl">
          <h2 className="text-colorFour font-poppins text-2xl md:text-[36px] font-semibold leading-snug md:leading-[46px] w-full md:w-[50%]">
            Billing Address
          </h2>
          <p className="text-colorFour font-montserrat text-base md:text-[20px] font-normal leading-[24px] md:leading-[30px] mt-5 md:mt-[20px]">
            See your billing information.
          </p>
        </div>
      </div>

      {/* Conditional content section */}
      <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
        {selectedMenu === 'orders' && <Orders />}
        {selectedMenu === 'account' && <AccountDetails />}
        {selectedMenu === 'logout' && (
          <div className="text-center text-red-600 font-semibold text-xl py-20">
            You have logged out successfully.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileRight;
