import React from 'react';
import { souportSectionData } from '../home/components/souportSction/soupportApi';

const BuyNowAndCout = () => {
  return (
    <div className="]">
      <div className="flex flex-wrap gap-x-[30px]">
        {souportSectionData?.slice(1, 4).map((item, index) => {
          const Icon = item?.icon;
          return (
            <div
              className="flex items-center gap-x-3 rounded-md transition-all duration-300"
              key={index}
            >
              <Icon className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-montserrat text-base font-bold leading-6">
                  {item?.title}
                </h3>
                <p className="font-montserrat text-[12px] font-normal leading-6 text-gray-600">
                  {item?.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyNowAndCout;
