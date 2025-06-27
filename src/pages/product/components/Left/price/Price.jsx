import { Slider } from 'antd';
import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Price = () => {
  const [open, setOpen] = useState(true);
  const [range, setRang] = useState([10, 10000]);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className="mt-[40px]">
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
              <div className="mt-[24px] flex gap-x-[10px]">
                <div className="w-[124px] h-[74px] border border-gray-300 rounded-[10px] flex items-center justify-center">
                  ${range[0]}
                </div>
                <div className="w-[124px] h-[74px] border border-gray-300 rounded-[10px] flex items-center justify-center">
                  ${range[1]}
                </div>
              </div>
              <div className="mt-[37px]">
                <Slider
                  range
                  defaultValue={range}
                  value={range}
                  min={200}
                  max={10000}
                  onChange={value => setRang(value)}
                  trackStyle={[{ background: '#FF624C' }]}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Price;
