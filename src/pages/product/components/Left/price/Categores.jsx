import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';

const Categores = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-montserrat text-[20px] font-bold leading-[30px] text-colorFour">
            Categores
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
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Computers & Tablets
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Mobile & Accessories
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    TV & Home Theater
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Audio & Headphones
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Cameras & Camcorders
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Gaming Equipment
                  </span>
                </label>
              </li>
              <li className="flex gap-x-[8px] mb-[12px]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-5 h-5 rounded-md border border-gray-300 peer-checked:bg-[#FF624C] peer-checked:text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="ml-2 text-gray-700 font-montserrat text-base font-bold leading-[24px]">
                    Home Appliances
                  </span>
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categores;
