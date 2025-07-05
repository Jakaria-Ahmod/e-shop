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

          {cartdData.length > 0 ? (
            cartdData.map(item => (
              <div key={item.id}>
                <AllCartAded
                  brand={item.brand}
                  pName={item?.pName}
                  price={item?.price}
                  qty={item?.qty}
                  id={item?.id}
                  image={item?.image}
                  handleDelete={handleDelete} // এখানে পাস করো
                />
              </div>
            ))
          ) : (
            <div>
              <div className="flex flex-col items-center justify-center h-[400px] text-center bg-gray-50 rounded-lg shadow-md mt-[50px]">
                <MdRemoveShoppingCart size={80} className="text-red-400 mb-4" />
                <h2 className="text-3xl font-bold text-red-500 mb-2">
                  Oops! Cart is Empty
                </h2>
                <p className="text-gray-600 text-lg">
                  You haven't added any product to your cart yet.
                </p>
                <Link to="/product">
                  <button className="mt-6 px-6 py-3 bg-primary text-white text-base rounded hover:bg-primary/90 transition duration-200 ease-in-out cursor-pointer">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[618px]  p-[32px] rounded-md flex justify-between items-center border border-gray-400">
            <div>
              <input
                type="text"
                placeholder="Enter coupon code (ex: FIRSTPAY)"
                className="w-[271px] font-montserrat text-colorFour text-base font-normal leading-[24px] opacity-75 border-none outline-none"
              />
            </div>
            <div>
              <button className="font-poppins text-[20px] font-semibold leading-[30px] text-colorFour cursor-pointer border-b-2">
                Apply Code
              </button>
            </div>
          </div>
          <div className="w-[618px] bg-colorSeven p-[32px] rounded-md flex justify-between">
            <div>
              <h3 className="uppercase text-colorFour font-montserrat text-base font-bold leading-[24px]">
                SUB TOTAL
              </h3>
            </div>
            <div className="flex gap-x-[23px]">
              <h3 className="font-poppins text-primary text-[24px] font-semibold leading-[30px]">
                $ {subTotal}
              </h3>
              <p className="font-montserrat text-sm font-normal text-colorFour leading-[20px]">
                ( excl. shipping fee )
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end mt-[32px] gap-x-[56px] mb-[100px]">
            <h3 className="text-colorFour font-poppins text-[20px] font-semibold leading-[30px]">
              Continue Shopping
            </h3>
            <Link to="/product">
              <CommonButton>Update Cart</CommonButton>
            </Link>
          </div>
        </div>
        <div className="w-full h-[2px] border border-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-20 mb-[80px]">
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
