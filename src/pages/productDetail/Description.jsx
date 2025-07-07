import React from 'react';

const Description = ({ description = 'not found !' }) => {
  return (
    <>
      <div>
        <div className="lg:mt-[100px] mt-4">
          <div>
            <h3 className="lg:mb-[60px] mb-2.5 font-poppins text-colorFour opacity-25 text-[24px] font-semibold leading-[30px]">
              Description
            </h3>
            <p className="font-poppins text-colorFour text-sm lg:text-lg font-normal leading-[30px] opacity-75">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
