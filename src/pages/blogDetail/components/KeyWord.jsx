import React from 'react';

const KeyWord = ({ keyWord }) => {
  return (
    <div>
      <div className="w-[1020px] flex flex-wrap gap-x-[8px] px-[32px] py-[28px] bg-colorSeven mt-[32px] rounded-[25px]">
        {keyWord.map(item => (
          <button className="py-[12px] px-[20px] text-colorFour text-sm font-montserrat mt-[8px] font-normal leading-[20px] bg-white rounded-[5px] cursor-pointer">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyWord;
