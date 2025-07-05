import React from 'react';
import { Link, useLocation } from 'react-router';
import AllCartAded from './components/AllCartAded';

const Cart = () => {
  const pathName = useLocation();
  const pageName = pathName.pathname.split('/')[1];

  return (
    <div>
      <div className="container">
        <div className="mt-[64px] mb-[48px]">
          <div className="flex items-center gap-x-[16px]">
            <p className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              <Link to="/">Home</Link>
            </p>
            <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              |
            </span>
            <span className="font-montserrat text-base font-bold leading-[24px] text-colorFour">
              {pageName}
            </span>
          </div>
          <div className=" mt-[48px] mb-[28px]">
            <h3 className="text-colorFour font-poppins font-bold leading-[68px] text-[56px]">
              Your Cart
            </h3>
          </div>
          <div className="bg-colorSeven py-[32px] px-[56px] rounded-[15px] grid grid-cols-[607px_171px_171px_171px] mb-[32px]">
            <div>
              <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
                PRODUCT
              </h2>
            </div>
            <div>
              <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
                PRICE
              </h2>
            </div>
            <div>
              <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
                QTY
              </h2>
            </div>
            <div>
              <h2 className="uppercase font-montserrat font-bold leading-[24px] text-colorFour text-base">
                TOTAL
              </h2>
            </div>
          </div>
          <AllCartAded></AllCartAded>
        </div>
      </div>
    </div>
  );
};

export default Cart;
