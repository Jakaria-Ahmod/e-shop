import React from 'react';
import { Link, useLocation } from 'react-router';
import AllCartAded from './components/AllCartAded';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { removeProduct } from '../../service/redux/features/cartSlice';
import CommonButton from '../../globalComponents/comonButton';
import { souportSectionData } from '../home/components/souportSction/soupportApi';

const Cart = () => {
  const pathName = useLocation();
  const pageName = pathName.pathname.split('/')[1];
  const dispatch = useDispatch();
  const cartdData = useSelector(state => state.cart.items);

  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const subTotal = cartdData
    .reduce((acc, crnt) => acc + crnt.price * crnt.qty, 0)
    .toFixed(2);

  return (
    <div className="px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="lg:mt-[64px] mt-5 lg:mb-[48px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-x-[8px] text-sm lg:text-base">
            <p className="font-montserrat font-normal text-colorFour">
              <Link to="/">Home</Link>
            </p>
            <span className="font-montserrat font-normal text-colorFour">
              |
            </span>
            <span className="font-montserrat font-bold text-colorFour">
              {pageName}
            </span>
          </div>

          {/* Title */}
          <div className="mt-4 lg:mt-[48px] mb-4 lg:mb-[28px]">
            <h3 className="text-colorFour font-poppins font-bold text-2xl lg:text-[56px] leading-tight">
              Your Cart
            </h3>
          </div>

          {/* Cart Header */}
          <div
            className="bg-colorSeven w-full py-[24px] px-[56px] rounded-[15px] 
            hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-[607px_171px_171px_171px] gap-x-4 gap-y-4 mb-[32px]"
          >
            <h2 className="uppercase font-montserrat font-bold text-colorFour text-sm lg:text-base">
              PRODUCT
            </h2>
            <h2 className="uppercase font-montserrat font-bold text-colorFour text-sm lg:text-base">
              PRICE
            </h2>
            <h2 className="uppercase font-montserrat font-bold text-colorFour text-sm lg:text-base">
              QTY
            </h2>
            <h2 className="uppercase font-montserrat font-bold text-colorFour text-sm lg:text-base">
              TOTAL
            </h2>
          </div>

          {/* Cart Items or Empty Message */}
          {cartdData.length > 0 ? (
            cartdData.map(item => (
              <div key={item.id}>
                <AllCartAded
                  brand={item.brand}
                  pName={item.pName}
                  price={item.price}
                  qty={item.qty}
                  id={item.id}
                  image={item.image}
                  handleDelete={handleDelete}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] text-center bg-gray-50 rounded-lg shadow-md mt-[50px] px-4">
              <MdRemoveShoppingCart size={80} className="text-red-400 mb-4" />
              <h2 className="text-2xl lg:text-3xl font-bold text-red-500 mb-2">
                Oops! Cart is Empty
              </h2>
              <p className="text-gray-600 text-base lg:text-lg">
                You haven't added any product to your cart yet.
              </p>
              <Link to="/product">
                <button className="mt-6 px-6 py-3 bg-primary text-white text-sm lg:text-base rounded hover:bg-primary/90 transition duration-200 ease-in-out cursor-pointer">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Coupon & Subtotal Section */}
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-between  lg:gap-x-[30px] items-center mt-7">
          {/* Coupon Box */}
          <div className="w-full lg:w-[500px] xl:w-[618px] p-[20px] lg:p-[32px] rounded-md flex flex-col sm:flex-row gap-4 sm:gap-x-2.5 justify-between items-center border border-gray-400">
            <input
              type="text"
              placeholder="Enter coupon code (ex: FIRSTPAY)"
              className="w-full sm:w-[271px] font-montserrat text-colorFour text-sm lg:text-base font-normal opacity-75 border-none outline-none"
            />
            <button className="font-poppins text-sm lg:text-[20px] font-semibold text-colorFour border-b-2">
              Apply Code
            </button>
          </div>

          {/* Sub Total */}
          <div className="w-full lg:w-[500px] xl:w-[618px] bg-colorSeven p-[20px] lg:p-[32px] rounded-md flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:gap-x-[10px]">
            <h3 className="uppercase text-colorFour font-montserrat text-sm lg:text-base font-bold">
              SUB TOTAL
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-[15px]">
              <h3 className="font-poppins text-primary text-xl lg:text-[24px] font-semibold">
                $ {subTotal}
              </h3>
              <p className="font-montserrat text-sm font-normal text-colorFour leading-[20px] text-center sm:text-left">
                ( excl. shipping fee )
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 sm:gap-x-[56px] mt-[32px] lg:mb-6 xl:mb-[100px]">
          {/* <h3 className="text-colorFour font-poppins text-sm lg:text-[20px] font-semibold"></h3> */}
          <Link to="/product">
            <CommonButton>Continue Shopping</CommonButton>
          </Link>
          <Link to="/checkout">
            <CommonButton>Checkout</CommonButton>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] border border-gray-300 mt-4 lg:mt-0"></div>

        {/* Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-20 lg:mb-[80px]">
          {souportSectionData?.map((item, index) => {
            const Icon = item?.icon;
            return (
              <div
                className="flex items-center gap-4 p-4 rounded-md transition-all duration-300"
                key={index}
              >
                <Icon className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat text-base font-bold leading-6">
                    {item?.title}
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-6 text-gray-600">
                    {item?.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
