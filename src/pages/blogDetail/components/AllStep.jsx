import React from 'react';

const AllStep = ({ stepNumber, stepTitle, stepDetails }) => {
  return (
    <div>
      <div className="flex gap-x-[30px] mt-[30px]  w-full">
        <div>
          <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-primary">
            <span className="font-poppins text-white text-[20px] font-semibold leading-[30px]">
              {stepNumber}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-colorFour font-montserrat text-[20px] font-bold leading-[30px]">
            {stepTitle}
          </h3>
          <p className="text-colorFour font-montserrat text-[20px] font-normal leading-[30px]">
            {stepDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllStep;
