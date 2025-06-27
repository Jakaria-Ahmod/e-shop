import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Brands = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className="mt-[40px]">
          <div className="flex justify-between">
            <h3 className="font-montserrat text-[20px] font-bold leading-[30px] text-colorFour">
              Brands
            </h3>
            <span onClick={handleToggle}>
              {open ? (
                <IoIosArrowUp className="cursor-pointer" size={16} />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="cursor-pointer"
                  size={20}
                />
              )}
            </span>
          </div>
          {open && (
            <div className="mt-[20px] mb-[40px]">
              <ul>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      Apple
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      Samsung
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      ASUS
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      Dell
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      Lenovo
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      HP
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
                <li className="flex gap-x-[8px] mb-[12px] justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                      Panasonic
                    </span>
                  </label>
                  <span ssName="ml-2 text-gray-700 font-montserrat text-base font-normal leading-[24px]">
                    (100)
                  </span>
                </li>
              </ul>
              more ..... , ব্যাক এনড আসার পরে
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
