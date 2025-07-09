import React from 'react';

const DetailsPara = ({ LastParGap }) => {
  return (
    <div className="mt-[32px]">
      <div>
        <p className="font-montserrat text-[20px] font-normal leading-[30px] text-colorFour">
          {LastParGap}
        </p>
      </div>
    </div>
  );
};

export default DetailsPara;
