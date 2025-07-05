import React from 'react';

const Description = ({ description = 'not found !' }) => {
  return (
    <>
      <div>
        <div className="mt-[100px] ">
          <div>
            <h3 className="mb-[60px] font-poppins text-colorFour opacity-25 text-[24px] font-semibold leading-[30px]">
              Description
            </h3>
            <p className="font-poppins text-colorFour text-lg font-normal leading-[30px] opacity-75">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
