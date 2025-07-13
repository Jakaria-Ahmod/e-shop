import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import NoOrderFound from '../NoOrderFound';

const OrderSummary = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  const subTotal = cart
    .reduce((acc, crnt) => acc + crnt.price * crnt.qty, 0)
    .toFixed(2);
  return (
    <div>
      <div className="p-[40px] max-h-[1071px] flex flex-col justify-between bg-colorSeven rounded-md">
        <div>
          <h3 className="font-poppins text-colorFour text-[24px] font-semibold leading-[30px]">
            Order Summary
          </h3>
          <div className="mt-[48px]">
            {cart.length == 0 ? (
              <div>
                <NoOrderFound></NoOrderFound>
              </div>
            ) : (
              cart.map(item => (
                <div>
                  <div className="flex justify-between ">
                    <h4 className="w-[250px] text-colorFour font-montserrat text-[20px] font-normal leading-[30px]">
                      {item?.pName}
                    </h4>
                    <span className="font-montserrat w-[50px] text-[20px] font-bold leading-[30px] text-center ">
                      {item?.qty}
                    </span>
                    <span className="font-montserrat w-[150px] text-end text-colorFour text-[20px] font-bold leading-[30px]">
                      {' '}
                      $ {(item?.qty * item?.price).toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-gray-300 mt-[20px]"></div>
                </div>
              ))
            )}
            <div className="w-full p-[27px] bg-white mt-[48px] rounded-md flex justify-between items-center">
              <h2 className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
                Total
              </h2>
              <span className="font-montserrat text-colorFour text-[20px] font-bold leading-[30px]">
                $ {subTotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
