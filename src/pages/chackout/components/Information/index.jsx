import React from 'react';
import From from './From';
import OrderSummary from './OrderSummary';
import UptadesIndex from '../../../home/components/uptades';

const Information = () => {
  return (
    <div>
      <div className="grid grid-cols-[870px_594px] gap-x-[56px] my-[80px]">
        <From></From>
        <OrderSummary></OrderSummary>
      </div>
      <div>
        <UptadesIndex></UptadesIndex>
      </div>
    </div>
  );
};

export default Information;
