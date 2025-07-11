import React from 'react';

const KeyWord = ({ keyWord }) => {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-[1020px] mx-auto flex flex-wrap gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 py-6 bg-colorSeven rounded-2xl">
        {keyWord.map((item, index) => (
          <button
            key={index}
            className="py-2 px-4 text-colorFour text-sm sm:text-base font-montserrat font-medium bg-white rounded-md cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyWord;
