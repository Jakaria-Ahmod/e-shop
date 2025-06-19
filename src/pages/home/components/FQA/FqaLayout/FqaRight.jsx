import React from 'react';
import CommonButton from '../../../../../globalComponents/comonButton';

const FqaRight = () => {
  return (
    <div className="self-end">
      <div>
        <h2 className="font-poppins text-colorFour text-3xl xl:text-[36px] font-semibold leading-[46px] mb-6 ">
          Frequently Asked Questions
        </h2>
        <p className="text-colorFour text-base lg:text-xl font-normal leading-[30px] font-montserrat mb-[64px]">
          Questions that get asked the most by our clients. Get any burning
          questions?
        </p>
        <div className="mb-[20px] -mt-4">
          <CommonButton>Ask A Question</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default FqaRight;
