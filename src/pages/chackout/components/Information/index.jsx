import React from 'react';
import From from './From';
import OrderSummary from './OrderSummary';
import UptadesIndex from '../../../home/components/uptades';

const Information = () => {
  return (
    <div className="px-4 md:px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[870px_594px] gap-y-[40px] lg:gap-y-0 lg:gap-x-[56px] my-[40px] lg:my-[80px]">
        <From />
        <OrderSummary />
      </div>
      <div>{/* Maybe UptadesIndex can be used here if needed */}</div>
    </div>
  );
};

export default Information;
