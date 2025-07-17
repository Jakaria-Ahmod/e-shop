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
    }
    // console.log(email);
    else {
      toast.success('send your Emial . Thank you');
    }
    setEmail('');
  };
  return (
    <div className="lg:h-[531px] w-full bg-linear-to-r from-white-500 to-gray-500 rounded-md overflow-hidden">
      <div>
        <div className="w-[681px] h-full p-2 lg:pl-[113px] py-4 lg:pt-[113px] lg:pb-[113px]">
          <h3 className="text-colorFour font-poppins font-semibold leading-[46px] text-[36px]">
            Get Our Updates
          </h3>
          <p className="text-colorFour font-montserrat text-base w-[350px] lg:w-[600px] lg:text-2xl font-normal leading-[30px] mt-[16px] mb-[32px]">
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <form action="" onSubmit={handleClick}>
            <Input
              placeholder="Enter your email address ..."
              className="lg:!w-[466px] !w-[300px] !p-[14px] mb-[!16px]"
              onChange={e => setEmail(e.target.value)}
              name="email"
              value={email}
            ></Input>
            <br />
            <br />
            <CommonButton desable={desable}>Subscribe</CommonButton>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeft;
