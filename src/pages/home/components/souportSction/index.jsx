import React from 'react';
import { souportSectionData } from './soupportApi.js';

const SoupportSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-20">
        {souportSectionData?.map((item, index) => {
          const Icon = item?.icon;
          return (
            <div
              className="flex items-center gap-4 p-4 rounded-md transition-all duration-300"
              key={index}
            >
              <Icon className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-montserrat text-base font-bold leading-6">
                  {item?.title}
                </h3>
                <p className="font-montserrat text-base font-normal leading-6 text-gray-600">
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

export default SoupportSection;
