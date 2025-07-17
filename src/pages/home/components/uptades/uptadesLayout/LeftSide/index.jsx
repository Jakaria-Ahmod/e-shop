import Input from 'antd/es/input/Input';
import React, { useState } from 'react';
import CommonButton from '../../../../../../globalComponents/comonButton';
import { toast, ToastContainer } from 'react-toastify';

const UpdateLeft = () => {
  const [email, setEmail] = useState('');
  const [desable, setDesable] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    if (!email) {
      toast.warning('Pliese Enter Your Email....');
      setDesable(true);
    } else {
      toast.success('send your Emial . Thank you');
    }
    setEmail('');
  };

  return (
    <div className="w-full h-auto bg-linear-to-r from-white-500 to-gray-500 rounded-md overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[681px] h-full px-4 lg:pl-[113px] py-8 lg:pt-[113px] lg:pb-[113px]">
          <h3 className="text-colorFour font-poppins font-semibold leading-[46px] text-[36px]">
            Get Our Updates
          </h3>
          <p className="text-colorFour font-montserrat text-base lg:text-2xl font-normal leading-[30px] mt-[16px] mb-[32px] w-full max-w-[600px]">
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <form onSubmit={handleClick}>
            <Input
              placeholder="Enter your email address ..."
              className="!w-full max-w-[466px] !p-[14px] mb-[16px]"
              onChange={e => setEmail(e.target.value)}
              name="email"
              value={email}
            />
            <br />
            <br />
            <CommonButton desable={desable}>Subscribe</CommonButton>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeft;
