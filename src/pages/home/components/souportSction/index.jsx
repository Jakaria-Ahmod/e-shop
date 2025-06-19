import React from 'react';
import { souportSectionData } from './soupportApi.js';

const SoupportSection = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-y-5 lg:gap-y-0 items-center justify-between mt-[30px] lg:mt-[80px]">
          {souportSectionData?.map((item, index) => {
            const Icon = item?.icon;
            return (
              <div className="flex gap-x-[24px] items-center" key={index}>
                <Icon></Icon>
                <div>
                  <h3 className="font-montserrat text-base font-bold leading-[24px]">
                    {item?.title}
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[24px]">
                    {item?.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoupportSection;
